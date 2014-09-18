function setup() {
	createCanvas(640, 480);

	backgroundColor = color(0, 0, 0);
	fillColor = color(0, 0, 255);
}

function draw() {
	background(backgroundColor);

	fillColor = color(Math.random() * 255,
		Math.random() * 255,
		Math.random() * 255.
		Math.random() * 255);

	mouseColor = color(mouseX / 640 * 255,
		mouseY / 480 * 255,
		0
		);

	// fill(fillColor);
	// rect(100, 100, 100, 100);

	fill(mouseColor);
	ellipse(300, 300, 100, 100);
}