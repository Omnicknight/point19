class Unit {
    constructor(type, health, distance) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
    }
    
    showUnit() {
        let div = document.createElement('div');
        div.className = 'unit';
        let divHealth = document.createElement('div');
        divHealth.className = 'health';
        divHealth.style.width = (this.health);
        let divStamina = document.createElement('div');
        divStamina.className = 'stamina';
        let divImg = document.createElement('div');
        divImg.className = 'img';
        let img = document.createElement('img');
        img.className = 'img';
        

        document.body.append(div);
        div.appendChild(divHealth);
        div.appendChild(divStamina);
        div.appendChild(divImg);
        divImg.appendChild(img);
        
            if(this.type === 'Infantryman') {
                img.src = '\pictures\infantryman.jpg';
            } else if (this.type === 'Sniper') {
                img.src = 'pictures\sniper.jpg'
            } else if (this.type === 'Sapper') {
                img.src = 'pictures\sapper.jpg'
            } ;
        

    }
    
    isReadyToMove() {
        return this.distance > 0;
    }

    isReadyToFight() {
        return this.health > 0;
    }
    
    restore() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance;
    }

    clone() {
        return new Unit(this.type, this.maxHealth, this.maxDistance);
    }
}
