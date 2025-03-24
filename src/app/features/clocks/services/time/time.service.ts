import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  #seconds = signal<number>(0)
  #minutes = signal<number>(0)
  #hours = signal<number>(0)
  #interval: NodeJS.Timeout | null = null

  // Get the seconds
  get seconds() {
    return this.#seconds()
  }

  // Set the seconds
  set seconds(seconds: number) {
    this.#seconds.update(() => seconds)
  }

  // Get the minutes
  get minutes() {
    return this.#minutes()
  }

  // Set the minutes
  set minutes(minutes: number) {
    this.#minutes.update(() => minutes)
  }

  // Get the hours
  get hours() {
    return this.#hours()
  }

  // Set the hours
  set hours(hours: number) {
    this.#hours.update(() => hours)
  }

  // Start the time interval
  start() {
    // Set the time
    const time = new Date()
    this.seconds = time.getSeconds()
    this.minutes = time.getMinutes()
    this.hours = time.getHours()

    // Set an interval to increase the time by seconds
    this.#interval = setInterval(() => {
      this.increaseBySeconds(1)
    }, 1000)
  }

  // Clear the time interval
  clear() {
    if (this.#interval) {
      clearInterval(this.#interval)
      this.#interval = null
    }
  }

  // Reset the time interval
  reset() {
    this.clear()
    this.start()
  }

  // Increase the seconds
  increaseBySeconds(seconds: number) {
    this.#seconds.update((currentSeconds) => {
      const secondsRemainder = (currentSeconds + seconds) % 60
      const minutesPassed = Math.floor((currentSeconds + seconds) / 60)

      // Increase the minutes signal if there was a remainder
      this.increaseByMinutes(minutesPassed)

      // Increase the seconds signal
      return secondsRemainder
    })
  }

  // Increase the minutes
  increaseByMinutes(minutes: number) {
    this.#minutes.update((currentMinutes) => {
      const minutesRemainder = (currentMinutes + minutes) % 60
      const hoursPassed = Math.floor((currentMinutes + minutes) / 60)

      // Increase the hours signal if there was a remainder
      this.increaseByHours(hoursPassed)

      // Increase the seconds signal
      return minutesRemainder
    })
  }

  // Increase the hours
  increaseByHours(hours: number) {
    this.#hours.update((currentHours) => {
      // Increase the hours signal
      return (currentHours + hours) % 24
    })
  }
}
