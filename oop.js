class Game {
  constructor(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.attackBtn = document.querySelector(`.person-${this.name}-attack`);
    this.healthBtn = document.querySelector(`.person-${this.name}-health`);
    this.progressBar = document.querySelector(
      `.person-${this.name}-progress span`
    );
    this.healthUi = document.querySelector(
      `.person-${this.name}-healthUi span`
    );
    this.strengthUi = document.querySelector(
      `.person-${this.name}-strengthUi span`
    ).innerHTML = this.strength;
  }
  updatedHealth() {
    return (this.healthUi.innerHTML = this.health);
  }
}
// new instance of game
let ismaily = new Game("ismaily", 10, 100);
let alahly = new Game("alahly", 5, 100);

// showing health and strength on ui
ismaily.updatedHealth();
alahly.updatedHealth();

// make health   make revive
Game.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.progressBar.style.width = `${this.health}%`;
    this.updatedHealth();
  }
  if (this.health > 100) {
    this.health = 100;
    this.updatedHealth();
  }
};
// attack with strength
Game.prototype.makeAttack = function (opponent) {
  opponent.health -= this.strength;
  opponent.progressBar.style.width = `${opponent.health}%`;
  opponent.updatedHealth();

  if (opponent.health == 0) {
    opponent.attackBtn.remove();
    opponent.healthBtn.remove();
    this.attackBtn.remove();
    this.healthBtn.remove();
    document.querySelector(
      `.person-${opponent.name}-btns`
    ).innerHTML = `${opponent.name} is lose`;
    document.querySelector(
      `.person-${this.name}-btns`
    ).innerHTML = `${this.name} is win`;
  }
};

// function to attack click
ismaily.attackBtn.addEventListener("click", () => {
  ismaily.makeAttack(alahly);
});
alahly.attackBtn.addEventListener("click", () => {
  alahly.makeAttack(ismaily);
});
// function to make health click
ismaily.healthBtn.addEventListener("click", () => {
  ismaily.makeHealth();
});
alahly.healthBtn.addEventListener("click", () => {
  alahly.makeHealth();
});
