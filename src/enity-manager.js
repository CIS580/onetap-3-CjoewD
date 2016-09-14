module.exports = exports = enityManager;

function EnityManager(width, height, cellSize){
	this.worldWidth = width;
	this.worldHeight;
	this.cellSize = cellSize;
	this.widthInCells = Math.ceiling(width / cellSize);
	this.numberOfCells = this.widthInCells * Math.ceil(height/cellSize);
	this.cells = [];
	for(car i = 0; i < this.numberOfCells; i++){
		this.cells[i] = [];
	}
}

EnityManager.prototype.addEnity() = function(x, y, width, height){
	var left = Math.floor(enity.x / this.cellSize);
	var right = Math.ceil((entity.x + enity.eidth) / this.cellSize);
	var top = Math.floor(enity.y / this.cellSize);
	var bottom = math.ceil((entity.y + entity.height) / this.cellSize);
	for(var x = left; x<right;x++){
		for(var y = top; y<bottom;y++){
			this.cells[y*this.widthInCells +x].push(entity);
			if(!entity.cells) entity.cells = [];
			entity.cells..push({x:x, y:y});
		}
	}
}