
var blockRadios1=document.getElementById('blockRadios1');
var blockRadios2=document.getElementById('blockRadios2');

var blockRadiosEn1=document.getElementById('blockRadiosEn1');
var blockRadiosEn2=document.getElementById('blockRadiosEn2');

var blockRadiosHi1=document.getElementById('blockRadiosHi1');
var blockRadiosHi2=document.getElementById('blockRadiosHi2');


var block_code_container_id=document.getElementById('block_code_container_id');
var block_name_en_container_id=document.getElementById('block_name_en_container_id');
var block_name_hi_container_id=document.getElementById('block_name_hi_container_id');




var tehsilRadios1=document.getElementById('tehsilRadios1');
var tehsilRadios2=document.getElementById('tehsilRadios2');

var tehsilRadiosEn1=document.getElementById('tehsilRadiosEn1');
var tehsilRadiosEn2=document.getElementById('tehsilRadiosEn2');

var tehsilRadiosHi1=document.getElementById('tehsilRadiosHi1');
var tehsilRadiosHi2=document.getElementById('tehsilRadiosHi2');


var tehsil_code_container_id=document.getElementById('tehsil_code_container_id');
var tehsil_name_en_container_id=document.getElementById('tehsil_name_en_container_id');
var tehsil_name_hi_container_id=document.getElementById('tehsil_name_hi_container_id');






var grampanchayatRadios1=document.getElementById('grampanchayatRadios1');
var grampanchayatRadios2=document.getElementById('grampanchayatRadios2');

var grampanchayatRadiosEn1=document.getElementById('grampanchayatRadiosEn1');
var grampanchayatRadiosEn2=document.getElementById('grampanchayatRadiosEn2');

var grampanchayatRadiosHi1=document.getElementById('grampanchayatRadiosHi1');
var grampanchayatRadiosHi2=document.getElementById('grampanchayatRadiosHi2');


var grampanchayat_code_container_id=document.getElementById('grampanchayat_code_container_id');
var grampanchayat_name_en_container_id=document.getElementById('grampanchayat_name_en_container_id');
var grampanchayat_name_hi_container_id=document.getElementById('grampanchayat_name_hi_container_id');







var gramRadios1=document.getElementById('gramRadios1');
var gramRadios2=document.getElementById('gramRadios2');

var gramRadiosEn1=document.getElementById('gramRadiosEn1');
var gramRadiosEn2=document.getElementById('gramRadiosEn2');

var gramRadiosHi1=document.getElementById('gramRadiosHi1');
var gramRadiosHi2=document.getElementById('gramRadiosHi2');


var gram_code_container_id=document.getElementById('gram_code_container_id');
var gram_name_en_container_id=document.getElementById('gram_name_en_container_id');
var gram_name_hi_container_id=document.getElementById('gram_name_hi_container_id');





var village_type_Radios1=document.getElementById('village_typeRadios1');
var village_type_Radios2=document.getElementById('village_typeRadios2');

var village_type__code_container_id=document.getElementById('village_type__code_container_id');




var ward_Radios1=document.getElementById('wardRadios1');
var ward_Radios2=document.getElementById('wardRadios2');

var ward_code_container_id=document.getElementById('ward_code_container_id');



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

  function closeFormNav()
  {
    document.getElementById("IssueSidebar").style.width = "0";
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





  blockRadios1.addEventListener("click", function() {
    block_code_container_id.style.display= "block";
  });


  blockRadios2.addEventListener("click", function() {
    block_code_container_id.style.display= "none";
  });


  blockRadiosEn1.addEventListener("click", function() {
    block_name_en_container_id.style.display= "block";
  });

  blockRadiosEn2.addEventListener("click", function() {
    block_name_en_container_id.style.display= "none";
  });

  blockRadiosHi1.addEventListener("click", function() {
    block_name_hi_container_id.style.display= "block";
  });

  blockRadiosHi2.addEventListener("click", function() {
    block_name_hi_container_id.style.display= "none";
  });

  
  // tehsil events


  tehsilRadios1.addEventListener("click", function() {
    tehsil_code_container_id.style.display= "block";
  });


  tehsilRadios2.addEventListener("click", function() {
    tehsil_code_container_id.style.display= "none";
  });


  tehsilRadiosEn1.addEventListener("click", function() {
    tehsil_name_en_container_id.style.display= "block";
  });

  tehsilRadiosEn2.addEventListener("click", function() {
    tehsil_name_en_container_id.style.display= "none";
  });

  tehsilRadiosHi1.addEventListener("click", function() {
    tehsil_name_hi_container_id.style.display= "block";
  });

  tehsilRadiosHi2.addEventListener("click", function() {
    tehsil_name_hi_container_id.style.display= "none";
  });

 

   // grampanchayt events

   grampanchayatRadios1.addEventListener("click", function() {
    grampanchayat_code_container_id.style.display= "block";
  });


  grampanchayatRadios2.addEventListener("click", function() {
    grampanchayat_code_container_id.style.display= "none";
  });


  grampanchayatRadiosEn1.addEventListener("click", function() {
    grampanchayat_name_en_container_id.style.display= "block";
  });

  grampanchayatRadiosEn2.addEventListener("click", function() {
    grampanchayat_name_en_container_id.style.display= "none";
  });

  grampanchayatRadiosHi1.addEventListener("click", function() {
    grampanchayat_name_hi_container_id.style.display= "block";
  });

  grampanchayatRadiosHi2.addEventListener("click", function() {
    grampanchayat_name_hi_container_id.style.display= "none";
  });


    // gram events


    gramRadios1.addEventListener("click", function() {
      gram_code_container_id.style.display= "block";
    });
  
  
    gramRadios2.addEventListener("click", function() {
      gram_code_container_id.style.display= "none";
    });
  
  
    gramRadiosEn1.addEventListener("click", function() {
      gram_name_en_container_id.style.display= "block";
    });
  
    gramRadiosEn2.addEventListener("click", function() {
      gram_name_en_container_id.style.display= "none";
    });
  
    gramRadiosHi1.addEventListener("click", function() {
      gram_name_hi_container_id.style.display= "block";
    });
  
    gramRadiosHi2.addEventListener("click", function() {
      gram_name_hi_container_id.style.display= "none";
    });




    // village type events


    village_typeRadios1.addEventListener("click", function() {
      village_type_code_container_id.style.display= "block";
    });
  
  
    village_typeRadios2.addEventListener("click", function() {
      village_type_code_container_id.style.display= "none";
    });



     // ward events


     ward_Radios1.addEventListener("click", function() {
      ward_code_container_id.style.display= "block";
    });
  
  
    ward_Radios2.addEventListener("click", function() {
      ward_code_container_id.style.display= "none";
    });
  
  
  


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

    


   