function openTargetTools() {
    document.getElementById("TargetSidebar").style.width = "300px";
    document.getElementById("TargetSidebar").style.height = "300px";
    document.getElementById("TargetSidebar").style.display = "block";
    document.getElementById("MeasurementSidebar").style.display = "none";
    document.getElementById("MaterialSidebar").style.display = "none";
  }
  
  function closeTargetNav() {
    document.getElementById("TargetSidebar").style.width = "0";
    document.getElementById("TargetSidebar").style.height = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function openMeasurementTools() {
    document.getElementById("MeasurementSidebar").style.width = "250px";
    document.getElementById("MeasurementSidebar").style.display = "block";
    document.getElementById("TargetSidebar").style.display = "none";
    document.getElementById("MaterialSidebar").style.display = "none";
  }
  
  function closeMeasurementNav() {
    document.getElementById("MeasurementSidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function openMaterialTools() {
    document.getElementById("MaterialSidebar").style.width = "200px";
    document.getElementById("MaterialSidebar").style.display = "block";
    document.getElementById("TargetSidebar").style.display = "none";
    document.getElementById("MeasurementSidebar").style.display = "none";
  }
  
  function closeMaterialNav() {
    document.getElementById("MaterialSidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function openReportTools() {
    document.getElementById("ReportSidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeReportNav() {
    document.getElementById("ReportSidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function openTableTools() {
    document.getElementById("TableSidebar").style.width = "93vw";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  function closeTableNav() {
    document.getElementById("TableSidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function openMapTools() {
    document.getElementById("main-map-sidebar").style.width = "12%";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  function closeMapNav() {
    document.getElementById("main-map-sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  function openSatelliteImg() {
    document.getElementById("s-map-id").style.display = "block";
    document.getElementById("s-map-id").style.marginLeft = "8px";
    document.getElementById("o-map-id").style.display = "none";
  }
  function openOrmImg() {
    document.getElementById("s-map-id").style.display = "none";
    document.getElementById("o-map-id").style.display = "block";
    document.getElementById("o-map-id").style.marginLeft = "8px";
  }



 
    function closeCard() {
      const card = document.getElementById('info-box');
      card.style.display = 'none';
    }

    // function toggleInput(formId) {
    //   var select = document.getElementById("yesNoSelect" + formId);
    //   var inputField = document.getElementById("conditionalInput" + formId);
    
    //   // Show input if "Yes" is selected, hide if "No" is selected
    //   if (select.value === "yes") {
    //     inputField.style.display = "block";
    //   } else {
    //     inputField.style.display = "none";
    //   }
    // }

    function toggleInput(inputId, show) {
      var inputElement = document.getElementById(inputId);
      if (show) {
          inputElement.style.display = "inline-block";
      } else {
          inputElement.style.display = "none";
      }
  }

    


   