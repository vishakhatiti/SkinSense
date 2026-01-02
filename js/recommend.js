function getRecommendation() {

    // 1️⃣ Get Skin Type
    const skinType = document.getElementById("skinType").value;

    // VALIDATION
    if (skinType === "") {
        alert("Please select your skin type to continue.");
        return;
    }

    // 2️⃣ Get Skin Problems
    const skinProblems = [];
    document.querySelectorAll('input[name="skinProblem"]:checked')
        .forEach(item => skinProblems.push(item.value));

    // 3️⃣ Get Hair Problems
    const hairProblems = [];
    document.querySelectorAll('input[name="hairProblem"]:checked')
        .forEach(item => hairProblems.push(item.value));

    // 4️⃣ Recommendation Logic (SOAP)
    let soap = "";

    if (skinType === "Oily") {
        soap = "Haldi & Neem Soap";
    } 
    else if (skinType === "Dry") {
        soap = "Aloe Vera Soap";
    } 
    else if (skinType === "Sensitive") {
        soap = "Aloe Vera Soap";
    } 
    else if (skinType === "Normal") {
        soap = "Rose Soap";
    }

    // Extra logic using problems
    if (skinProblems.includes("Acne")) {
        soap = "Haldi & Neem Soap";
    }
    if (skinProblems.includes("Tanning")) {
        soap = "Multani Mitti Soap";
    }

    // 5️⃣ Shampoo Logic
    let shampoo = "Not Recommended";

    if (hairProblems.length > 0) {
        shampoo = "Herbal Fresh-Use Shampoo";
    }

    // 6️⃣ Save Data for Result Page
    const recommendationData = {
        skinType,
        skinProblems,
        hairProblems,
        soap,
        shampoo,
        date: new Date().toLocaleDateString()
    };

    localStorage.setItem("skinsenseResult", JSON.stringify(recommendationData));

    // 7️⃣ Redirect to Result Page
    window.location.href = "result.html";
}
