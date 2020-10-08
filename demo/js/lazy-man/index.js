class LazyMan {
  constructor(name) {
    this._tasks = [];
    this._tasks.push(async () => {
      console.log(`I am ${name}`);
    });
    setTimeout(() => {
      this._next();
    }, 0)
  }

  async _next() {
    if (this._tasks.length === 0) {
      return;
    }
    const task = this._tasks.shift();
    await task();
    await this._next();
  }

  _sleepTask(time, isFirst) {
    if(isFirst === true) {
      this._tasks.unshift(async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Sleep First [${time}].....`);
            resolve();
          }, time);
        })
      })
    } else {
      this._tasks.push(async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Sleep [${time}].....`);
            resolve();
          }, time);
        })
      })
    }
  }

  sleep(time) {
    this._sleepTask(time);
    return this;
  }

  sleepFirst(time) {
    this._sleepTask(time, true);
    return this;
  }

  eat(food) {
    this._tasks.push(async() => {
      console.log(`Eat ${food}`)
    });
    return this;
  }
}

const man = new LazyMan('Mick');
man.sleep(1000).eat('Banana').sleepFirst(1000).eat('Apple');