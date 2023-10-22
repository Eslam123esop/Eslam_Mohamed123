document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // منع تحميل الصفحة من جديد عند الضغط على الزر

    var searchTerm = document.getElementById("search-input").value;

    // هنا يمكنك تحديد البحث وتوجيه المستخدم إلى الصفحة المناسبة
    if (searchTerm === "كتاب العلوم الصف الثامن") {
      window.location.href = "https://ict.moe.gov.om/book/"; // تحويل إلى OpenAI
    } else if (searchTerm === "google") {
      window.location.href = "https://www.google.com"; // تحويل إلى Google
    } else if (searchTerm === "كتاب العلوم") {
      window.location.href = "https://ict.moe.gov.om/book/"; // تحويل إلى Google
    } else if (searchTerm === "درس الذرات") {
      window.location.href = "https://youtu.be/fbtNV22t31Y"; // تحويل إلى Google
    } else if (searchTerm === " درس الذرات ") {
      window.location.href = "https://youtu.be/fbtNV22t31Y"; // تحويل إلى Google
    } else if (searchTerm === "الصيغ الكيميائية") {
      window.location.href = "https://youtu.be/cvqoKBuEg6w?si=wAFEklrmJ5REgdk3"; // تحويل إلى Google
    } else if (searchTerm === "الصيغ الكيميائيه") {
      window.location.href = "https://youtu.be/cvqoKBuEg6w?si=wAFEklrmJ5REgdk3"; // تحويل إلى Google
    } else if (searchTerm === "درس الصيغ الكيميائية") {
      window.location.href = "https://youtu.be/cvqoKBuEg6w?si=wAFEklrmJ5REgdk3"; // تحويل إلى Google
    } else if (searchTerm === "درس الصيغ الكيميائيه") {
      window.location.href = "https://youtu.be/cvqoKBuEg6w?si=wAFEklrmJ5REgdk3"; // تحويل إلى Google
    } else if (searchTerm === "الجدول الدوري") {
      window.location.href = "https://youtu.be/0FZnsQwwXZw"; // تحويل إلى Google
    } else if (searchTerm === "Eslam") {
      window.location.href = "https://eslam123esop.github.io/Eslam_Mohamed/"; // تحويل إلى Google
    } else if (searchTerm === "ملخص شرح درس الذرات") {
      window.location.href =
        "https://kanz3.com/2022/11/10/%D9%85%D9%84%D8%AE%D8%B5-%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%B0%D8%B1%D8%A7%D8%AA-%D9%84%D9%85%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%B9%D9%84/"; // تحويل إلى Google
    } else if (searchTerm === "ملخص درس الذرات") {
      window.location.href =
        "https://kanz3.com/2022/11/10/%D9%85%D9%84%D8%AE%D8%B5-%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%B0%D8%B1%D8%A7%D8%AA-%D9%84%D9%85%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%B9%D9%84/"; // تحويل إلى Google
    } else {
      alert("لم يتم العثور على نتائج.");
    }
  });
