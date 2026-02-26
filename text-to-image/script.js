let generatedImages = [];

async function generateImg() {
    const element = document.querySelector("#textInp");
    const container = document.querySelector("#genImg");
    container.innerHTML = "Generating pages... please wait.";
    generatedImages = [];

    const width = element.offsetWidth;
    const pageHeight = Math.floor(width * 1.414); // A4 Ratio
    const totalHeight = element.scrollHeight;
    const totalPages = Math.ceil(totalHeight / pageHeight);

    for (let i = 0; i < totalPages; i++) {
        // Capture the specific A4 slice
        const canvas = await html2canvas(element, {
            scale: 2,
            y: i * pageHeight,
            height: Math.min(pageHeight, totalHeight - (i * pageHeight)),
            windowHeight: totalHeight,
            scrollX: 0,
            scrollY: -window.scrollY // Fixes offset issues if page is scrolled
        });

        // IMPORTANT: Draw watermark on the canvas BEFORE converting to image
        applyWatermark(canvas);

        const dataUrl = canvas.toDataURL("image/png");
        generatedImages.push(dataUrl);

        // Display in UI
        const img = document.createElement('img');
        img.src = dataUrl;
        img.style.width = "100%";
        img.style.marginBottom = "20px";
        img.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
        
        if (i === 0) container.innerHTML = ""; 
        container.appendChild(img);
    }
}

function applyWatermark(canvas) {
    const ctx = canvas.getContext('2d');
    
    // Style settings
    ctx.font = "bold 45px 'Microsoft YaHei', sans-serif";
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // 0.2 Transparency
    ctx.textAlign = "center";

    const text = "@安静而苒";
    const stepX = 300; // Horizontal gap
    const stepY = 250; // Vertical gap

    // We loop through the canvas width and height to tile the text
    for (let x = 0; x < canvas.width + stepX; x += stepX) {
        for (let y = 0; y < canvas.height + stepY; y += stepY) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-35 * Math.PI / 180);
            ctx.fillText(text, 0, 0);
            ctx.restore();
        }
    }
}

function downloadAll() {
    if (generatedImages.length === 0) return alert("Generate first!");
    generatedImages.forEach((data, index) => {
        const a = document.createElement('a');
        a.href = data;
        a.download = `Page_${index + 1}.png`;
        a.click();
    });
}