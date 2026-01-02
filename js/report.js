function downloadReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get stored data
    const data = JSON.parse(localStorage.getItem("skinsenseResult"));

    if (!data) {
        alert("No recommendation data found.");
        return;
    }

    let y = 20;

    // Title
    doc.setFontSize(18);
    doc.text("SkinSense Recommendation Report", 20, y);
    y += 10;

    // Date
    doc.setFontSize(11);
    doc.text(`Date: ${data.date}`, 20, y);
    y += 12;

    // User Inputs
    doc.setFontSize(14);
    doc.text("User Details", 20, y);
    y += 8;

    doc.setFontSize(12);
    doc.text(`Skin Type: ${data.skinType}`, 20, y);
    y += 7;

    doc.text(
        `Skin Problems: ${data.skinProblems.length ? data.skinProblems.join(", ") : "None"}`,
        20,
        y
    );
    y += 7;

    doc.text(
        `Hair Problems: ${data.hairProblems.length ? data.hairProblems.join(", ") : "None"}`,
        20,
        y
    );
    y += 12;

    // Recommendations
    doc.setFontSize(14);
    doc.text("Recommendations", 20, y);
    y += 8;

    doc.setFontSize(12);
    doc.text("Recommended Soap:", 20, y);
    y += 6;
    doc.text(data.soap, 25, y);
    y += 10;

    doc.text("Shampoo Suggestion:", 20, y);
    y += 6;
    doc.text(data.shampoo, 25, y);
    y += 12;

    // Note
    doc.setFontSize(11);
    doc.text("Note:", 20, y);
    y += 6;
    doc.text(
        "This recommendation is generated using a rule-based system and natural formulations. "
        + "Results may vary depending on individual skin and hair conditions.",
        20,
        y,
        { maxWidth: 170 }
    );

    // Save
    doc.save("SkinSense_Recommendation_Report.pdf");
}
