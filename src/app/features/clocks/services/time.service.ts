import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  #initTime = new Date()
  #seconds = signal<number>(this.#initTime.getSeconds())
  #minutes = signal<number>(this.#initTime.getMinutes())
  #hours = signal<number>(this.#initTime.getHours())
  seconds = computed(this.#seconds)
  minutes = computed(this.#minutes)
  hours = computed(this.#hours)

  // Increase the seconds
  increaseBySeconds(seconds: number){
    this.#seconds.update((currentSeconds)=>{
      const secondsRemainder = (currentSeconds+seconds)%60
      const minutesPassed=(currentSeconds+seconds)/60

      // Increase the minutes signal if there was a remainder
      this.increaseByMinutes(minutesPassed)

      // Increase the seconds signal
      return secondsRemainder
    })
  }

  // Increase the minutes
  increaseByMinutes(minutes: number){
    this.#minutes.update((currentMinutes)=>{
      const minutesRemainder = (currentMinutes+minutes)%60
      const hoursPassed=(currentMinutes+minutes)/60

      // Increase the hours signal if there was a remainder
      this.increaseByHours(hoursPassed)

      // Increase the seconds signal
      return minutes
    })
  }

  // Increase the hours
  increaseByHours(hours: number){
    this.#hours.update((currentHours)=>{
      // Increase the hours signal
      return (currentHours+hours)%60
    })
  }

  // Set the seconds
  setSeconds(seconds: number) {
    this.#seconds.update(()=>seconds)
  }

  // Set the minutes
  setMinutes(minutes: number) {
    this.#minutes.update(()=>minutes)
  }

  // Set the hours
  setHours(hours: number) {
    this.#hours.update(()=>hours)
  }
}
