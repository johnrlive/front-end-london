(function() {

    function ExpandText(element, parent) {
        this.i = 0;
        this.interval = 40;

        this.element = element;
        this.text = this.element.innerHTML;
        //this.element.innerHTML = '';

        parent.on('mouseover', this.addLetter.bind(this));
        parent.on('mouseout', this.removeLetter.bind(this));

        this.timer = setTimeout(function() {
            this.i = this.text.length;
            this.removeLetter();
        }.bind(this), 1000);
    }

    ExpandText.prototype.setText = function(length) {
        return this.element.innerHTML = this.text.substr(0, length || this.i);
    };

    ExpandText.prototype.addLetter = function() {
        clearTimeout(this.timer);

        if (this.i >= this.text.length) {
            return;
        }

        this.timer = setTimeout(function() {
            this.i++;
            this.setText();
            this.addLetter();
        }.bind(this), this.interval);
    };

    ExpandText.prototype.removeLetter = function() {
        clearTimeout(this.timer);

        if (this.i <= 0) {
            return;
        }

        this.timer = setTimeout(function() {
            this.i--;
            this.setText();
            this.removeLetter();
        }.bind(this), this.interval);
    };

    window.ExpandText = ExpandText;

})();