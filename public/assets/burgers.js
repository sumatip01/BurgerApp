$(function() {
    $(".change-cheese").on("click", function(event) {
      var id = $(this).data("id");
      var newCheese = $(this).data("newCheese");
  
      var newCheeseState = {
        cheese: newCheese
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newCheeseState
      }).then(
        function() {
          console.log("changed cheese to", newCheese);
    
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) 

      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        cheese: $("[name=cheese]:checked").val().trim()
      };
    
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
    
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });