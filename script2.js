const teamBios = {
    member1: {
      name: "Abdul Hadi Shaikh",
      description: "Abdul Hadi is our head chef, with over 10 years of experience in Italian cuisine."
    },
    member2: {
      name: "Fahad Khan",
      description: "Fahad is our recipe developer, always experimenting with new flavors and techniques."
    },
    member3: {
      name: "Mairaj Bizenjo",
      description: "Mairaj writes our content, ensuring every recipe is easy to follow and full of helpful tips."
    }
  };

  function showBio(memberId) {
    const modal = document.getElementById("bioModal");
    document.getElementById("bioName").innerText = teamBios[memberId].name;
    document.getElementById("bioDescription").innerText = teamBios[memberId].description;
    modal.style.display = "block";
  }

  function closeBio() {
    document.getElementById("bioModal").style.display = "none";
  }

  // Close modal when clicking outside the modal content
  window.onclick = function (event) {
    const modal = document.getElementById("bioModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
