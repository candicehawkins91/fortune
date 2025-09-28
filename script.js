
    
    
    function fortuneTeller(name, age) {
      let fortune = "";

      // --- Name-based fortunes ---
      if (name.length > 7) {
        fortune += "will marry late in life. ";
      }
      if (name.length < 5) {
        fortune += "will marry within a year. ";
      }
      if (name.length >= 5 && name.length <= 7) {
        fortune += "will encounter a once-in-a-lifetime opportunity. ";
      }
      if (name[0].toLowerCase() === 'r') {
        fortune += "will be rich. ";
      }
      if (name.toLowerCase().includes('i')) {
        fortune += "will fall in love this week. ";
      }

      // --- Age-based fortunes (custom rules) ---
      if (age < 13) {
        fortune += "will discover a hidden talent soon.";
      } else if (age >= 13 && age < 20) {
        fortune += "will make a lifelong friend in the near future.";
      } else if (age >= 20 && age <= 40) {
        fortune += "will travel to a new and exciting place.";
      } else if (age > 40 && age <= 60) {
        fortune += "will raise a child who will change the world.";
      } else if (age > 60) {
        fortune += "will find great peace and joy in family.";
      }

      return name + " " + fortune;
    }

    function showFortune() {
      let name = document.getElementById("fName").value.trim();
      let age = parseInt(document.getElementById("age").value);

      if (!name || isNaN(age)) {
        document.getElementById("result").innerText = "Please enter a valid name and age.";
        return;
      }

      let result = fortuneTeller(name, age);
      document.getElementById("result").innerText = result;
    }