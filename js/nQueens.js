function queens(n, odom) {
    this.n = n > 3 && n < 10 ?  n : 1;
    this.row = new Array(n);
    this.odom = odom;
    if (n==2){
        alert('Nu sunt soluții valide pentru n=2.');
    }
    if (n==3){
        alert('Nu sunt soluții valide pentru n=3.');
    }

    if (n>9){
        alert('Valoarea introdusă pentru n este prea mare.');
    }
	
	if(n<1){
		alert('Valoarea introdusă pentru n este prea mică.');
	}
};

queens.prototype.is_good = function() {
    var n = this.n, row = this.row;
    for(var i = 0; i < n - 1; i++)
        for(var j = i + 1; j < n; j++) 
            if(row[i] == row[j] || Math.abs(row[i] - row[j]) == j - i)
                return 0;
    return 1;
};

queens.prototype.set_queen = function() {
    var n = this.n, row = this.row;
    do {
        for(var i = 0; i < n; i++)
            row[i] = Math.round(1000 * Math.random()) % n;
    } while(!this.is_good());
};

queens.prototype.is_good_back = function(col) {
    var row = this.row;
    if(col == 0) return 1;
    for(var i = 0; i < col; i++)
        if(row[i] == row[col] || Math.abs(row[i] - row[col]) == col - i)
            return 0;
    return 1;
};

queens.prototype.back = function(col) {
    var to;
    for(to = 0; to < this.n; to++) {
        this.row[col] = to;
        if(this.is_good_back(col)) {
            if(col == this.n - 1) this.show_table();
            else this.back(col + 1);
        }
    }
};

queens.prototype.show_table = function() {
    var n = this.n, row = this.row, diw = this.odom;
    var diag = document.createElement('table');
    diag.setAttribute('class', 'diag');
    var TR = document.createElement('tr');
    var TH = document.createElement('th');
    var TD = document.createElement('td');
    var SQ = document.createElement('img');
    SQ.setAttribute('src', "multimedia/queen.png");
    var DIV = document.createElement('div');
    var drow, cell, dsq, i, j;
    var tbody = document.createElement('tbody');
    for(i = 0; i < n; i++) {
        drow = TR.cloneNode(true);
        for(j = 0; j < n; j++) {
            cell = TD.cloneNode(true);
            dsq = DIV.cloneNode(true);
            if(row[j] == i)
                dsq.appendChild(SQ.cloneNode(true));
            cell.appendChild(dsq);
            drow.appendChild(cell);
        }
        tbody.appendChild(drow);
    }
    diag.appendChild(tbody);
    diw.appendChild(diag);
};
queens.prototype.run = function() {
    this.set_queen();
    this.odom.innerHTML="";
    this.show_table();
};
