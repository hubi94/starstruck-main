$(document).ready(function () {
  let $window = $(window),
    $body = $("body"),
    $nav = $("#nav");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: [null, "736px"],
  });

  // Scrolly.
  $("#nav a, .scrolly").scrolly({
    speed: 1000,
    offset: function () {
      return $nav.height();
    },
  });

  //Responsive NavBar

  function hamburger() {
    let x = document.querySelector("#topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.querySelector(".hamburger").addEventListener("click", hamburger);

  $("#lblCartCount").hide();

  /*----- Articles -----*/

  let articleHeaders = [
    "Freestyle Stitch Around Holes",
    "Make Embroidered Wool Moths to Fix Moth Holes",
    "Add Color Patches to Cover and Fix Holes",
    "Create Bold Embroidered Flowers to Patch Areas",
    "Cover Stains With Beaded Embroidery",
    "Stitch Jeans With Sashiko and Boro Repair",
    "Rescue a Favorite Sweater With Modern Spots of Satin Stitching",
    "Mend a Pocket With Embroidery That Strengthens and Embellishes",
    "Patch With Colorful Fabric and Creative Stitching",
  ];
  let articleText = [
    `While some visible mending covers up tears, Hunter Hammersen at Pantsville Press turned the holes in a favorite sweater into embroidery that shows off and accentuates those holes. She improvised, experimenting as she went, and shares a collection of posts showing the different areas of stitching so you get plenty of ideas from her experience.`,
    `Moth holes in a beautiful wool sweater are so sad, but with this tutorial from Nini Makes, your favorite sweater will be smiling once more. Especially because patching those holes with embroidered moths will be your own inside joke.`,
    `India Tresselt of Yarndance certainly knows how to bring color to her mending! The holes in these jeans are transformed into colorful patches made with woven embroidery stitches. Although her post doesn't walk you through the process, her photos of the different mended areas, both front, and back, will give you enough information to give this method a try.`,
    `Jenny Blair has a great video showing how to add embroidery to clothing using appliqué. The tutorial isn't specifically for mending, but the embroidered appliqué technique would be perfect for patching holes. And because the embroidery is worked on a separate piece of fabric, it's even a great way to use some existing embroidered bold florals you have sitting around!`,
    `Sometimes the repair your clothing needs isn't mending, but covering a permanent stain. Embroidery works for that too! Marysia at DaWanda shows how to cover a wine stain with beaded embroidery. The result looks like a beautifully sparkling spill!`,
    `The Japanese art of sashiko embroidery is commonly used for mending, often using a method called boro to patch fabric back together. Honestly, WTF teaches how to use these techniques to repair jeans. The result is a fashion piece that will make you want to wear out your clothes faster, just so you can mend them with sashiko!`,
    `This moth-eaten cashmere sweater takes on a whole new look when mended with tiny bits of colorful stitches. Knitted Bliss repaired the issues, then added a few extra areas of stitching so it looks more intentional and less like a patch. To use this method, start by sewing the hole together, then cover it with small blocks of satin stitch worked in different directions.`,
    `Clothes often tend to wear more quickly in specific locations, and the area around back pockets can experience extra stress. When that happens, use this tutorial from Shiny Happy World for mending the tear, then reinforcing and decorating with hand embroidery. It's functional and so pretty!`,
    `In this post showing four methods for mending or patching clothes, Design Mom shows how an under patch can be extra strong, and extra cute. She starts with a strong, fusible bonding material, and then adds decorative embroidery stitches where you might normally sew with a sewing machine. And the cross stitches aren't the only option for stitches here. Try adding lazy daisies, swirls or any little designs you like!`,
  ];

  let articles = document.getElementById("carousel");

  let article = "";
  for (let i = 0; i < articleHeaders.length; i++) {
    article += `<div class="col-4 col-6-medium col-12-small box style1">
							<span class="image"><img src="images/articles/article${[
                i + 1,
              ]}.webp" alt="img${[i + 1]}"></span>
							<h3>${articleHeaders[i]}</h3>
							<p>${articleText[i]}</p>
					</div>`;
  }

  articles.innerHTML = article;

  /* SLICK */

  $("#carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      '<div class="slick-prev slick-arrow"><i class="fas fa-angle-left"></i></div>',
    nextArrow:
      '<div class="slick-next slick-arrow"><i class="fas fa-angle-right"></i></div>',
  });

  //Products

  let products = [
    {
      name: "THE SUN PATTERN",
      price: 8,
      theme: "tarot",
      img: {
        src: "tarot5",
        alt: "tarot pattern 5",
      },
    },
    {
      name: "PRIMROSE PATTERN",
      price: 5,
      theme: "flowers",
      img: {
        src: "flowers1",
        alt: "flower pattern 1",
      },
    },
    {
      name: "CARNATION PATTERN",
      price: 5,
      theme: "flowers",
      img: {
        src: "flowers2",
        alt: "flower pattern 2",
      },
    },
    {
      name: "DREAM BIG PATTERN",
      price: 5,
      theme: "quotes",
      img: {
        src: "quotes2",
        alt: "quote pattern 2",
      },
    },
    {
      name: "GO GET IT GIRL PATTERN",
      price: 5,
      theme: "quotes",
      img: {
        src: "quotes3",
        alt: "quote pattern 3",
      },
    },
    {
      name: "GOOD THINGS AHEAD PATTERN",
      price: 5,
      theme: "quotes",
      img: {
        src: "quotes4",
        alt: "quote pattern 4",
      },
    },
    {
      name: "KISS ME PATTERN",
      price: 4,
      theme: "hearts",
      img: {
        src: "heart2",
        alt: "heart pattern 2",
      },
    },
    {
      name: "MANDALA PATTERN",
      price: 3,
      theme: "mandala",
      img: {
        src: "mandala3",
        alt: "mandala pattern 3",
      },
    },
    {
      name: "ACE OF CUPS PATTERN",
      price: 8,
      theme: "tarot",
      img: {
        src: "tarot1",
        alt: "tarot pattern 1",
      },
    },
    {
      name: "THE LOVERS PATTERN",
      price: 8,
      theme: "tarot",
      img: {
        src: "tarot2",
        alt: "tarot pattern 2",
      },
    },
    {
      name: "GOLD MANDALA PATTERN",
      price: 3,
      theme: "mandala",
      img: {
        src: "mandala1",
        alt: "mandala pattern 1",
      },
    },
    {
      name: "BE A NICE HUMAN PATTERN",
      price: 5,
      theme: "quotes",
      img: {
        src: "quotes1",
        alt: "quote pattern 1",
      },
    },
    {
      name: "GOLDEN DAISY PATTERN",
      price: 5,
      theme: "flowers",
      img: {
        src: "flowers3",
        alt: "flower pattern 3",
      },
    },
    {
      name: "DO WHAT YOU LOVE PATTERN",
      price: 5,
      theme: "quotes",
      img: {
        src: "quotes5",
        alt: "quote pattern 5",
      },
    },
    {
      name: "FLOWER MANDALA PATTERN",
      price: 3,
      theme: "mandala",
      img: {
        src: "mandala2",
        alt: "mandala pattern 2",
      },
    },
    {
      name: "SUMMER FLOWERS PATTERN",
      price: 5,
      theme: "flowers",
      img: {
        src: "flowers4",
        alt: "flower pattern 4",
      },
    },
    {
      name: "LOVE DOTS PATTERN",
      price: 4,
      theme: "hearts",
      img: {
        src: "heart1",
        alt: "heart pattern 1",
      },
    },
    {
      name: "BARGELLO HEART PATTERN",
      price: 4,
      theme: "heart",
      img: {
        src: "heart3",
        alt: "heart pattern 3",
      },
    },
    {
      name: "THE MOON PATTERN",
      price: 8,
      theme: "tarot",
      img: {
        src: "tarot3",
        alt: "tarot pattern 3",
      },
    },
    {
      name: "THE TOWER PATTERN",
      price: 8,
      theme: "tarot",
      img: {
        src: "tarot4",
        alt: "tarot pattern 4",
      },
    },
  ];
 
  showProducts(products);

  $('#sort').on('change', function() {
    let sortedProducts = sorting(products);
    showProducts(sortedProducts);
 })


  /*----- SIGN UP/LOG IN FORM ------*/

  $(".form")
    .find("input, textarea")
    .on("keyup blur focus", function (e) {
      var $this = $(this),
        label = $this.prev("label");

      if (e.type === "keyup") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.addClass("active highlight");
        }
      } else if (e.type === "blur") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.removeClass("highlight");
        }
      } else if (e.type === "focus") {
        if ($this.val() === "") {
          label.removeClass("highlight");
        } else if ($this.val() !== "") {
          label.addClass("highlight");
        }
      }

      const nameRegEx = /^[A-Z][a-z]{2,11}$/;
      const surnameRegEx = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})*/;
      const emailRegEx = /^[\w]+[\.\w\d]*\@[\w]+([\.][\w]+)+$/;
      const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
      const btnSU = document.getElementById("btnSU");
      const btnLog = document.getElementById("btnLog");

      /* Sign Up form */

      btnSU.addEventListener("click", function () {
        let errors = [];

        let name = document.getElementById("name");
        let surname = document.getElementById("surname");
        let emailSU = document.getElementById("emailSU");
        let passSU = document.getElementById("passSU");
        let passConfirm = document.getElementById("passConf");

        let nameErr = document.querySelector(".name-err");
        let surnameErr = document.querySelector(".surname-err");
        let emailSUErr = document.querySelector(".emailSU-err");
        let passSUErr = document.querySelector(".passSU-err");
        let passConfirmErr = document.querySelector(".passConf-err");

        console.log("varijabla: " + nameErr);

        if (!nameRegEx.test(name.value)) {
          $(name).addClass("err");
          nameErr.innerHTML = "First letter must be capitalized";
          console.log("regex fail");
          errors.push(name.value);
        } else {
          $(name).addClass("valid");
          nameErr.innerHTML = "";
        }

        if (!surnameRegEx.test(surname.value)) {
          $(surname).addClass("err");
          surnameErr.innerHTML = "First letter must be capitalized";
          console.log("regex fail");
          errors.push(surname.value);
        } else {
          $(surname).addClass("valid");
          surnameErr.innerHTML = "";
        }

        if (!emailRegEx.test(emailSU.value)) {
          $(emailSU).addClass("err");
          emailSUErr.innerHTML = "Email should be in form of example@mail.com";
          console.log("regex fail");
          errors.push(emailSU.value);
        } else {
          $(emailSU).addClass("valid");
          emailSUErr.innerHTML = "";
        }

        if (!passwordRegEx.test(passSU.value)) {
          $(passSU).addClass("err");
          passSUErr.innerHTML =
            "Password must be at least 8 characters long and contain a number, uppercase and lowercase letter";
          console.log("regex fail");
          errors.push(passSU.value);
        } else {
          $(passSU).addClass("valid");
          passSUErr.innerHTML = "";
        }

        if (
          passSU.value !== passConfirm.value || passSU.value == "" 
        ) {
          $(passConfirm).addClass("err");
          passConfirmErr.innerHTML = "Passwords do not match";
          console.log("regex fail");
          errors.push(passConfirm.value);
        } else {
          $(passConfirm).addClass("valid");
          passConfirmErr.innerHTML = "";
        }

        if (greske.length === 0) {
          return true;
        }
        return false;
      });

      /* Log In form*/

      btnLog.addEventListener("click", function () {
        let errors = [];

        let emailLog = document.getElementById("emailLog");
        let passLog = document.getElementById("passLog");

        let emailLogErr = document.querySelector(".emailLog-err");
        let passLogErr = document.querySelector(".passLog-err");

        if (!emailRegEx.test(emailLog.value)) {
          $(emailLog).addClass("err");
          emailLogErr.innerHTML = "Email should be in form of example@mail.com";
          console.log("regex fail");
          errors.push(emailLog.value);
        } else {
          $(emailLog).addClass("valid");
          emailLogErr.innerHTML = "";
        }

        if (!passwordRegEx.test(passLog.value)) {
          $(passLog).addClass("err");
          passLogErr.innerHTML =
            "Password must be at least 8 characters long and contain a number, uppercase and lowercase letter";
          console.log("regex fail");
          errors.push(passLog.value);
        } else {
          $(passLog).addClass("valid");
          passLogErr.innerHTML = "";
        }

        if (greske.length === 0) {
          return true;
        }
        return false;
      });
    });

  $(".tab a").on("click", function (e) {
    e.preventDefault();

    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");

    target = $(this).attr("href");

    $(".tab-content > div").not(target).hide();

    $(target).fadeIn(600);
  });

}) ;

function showProducts(products){
  let product = "";
  products.forEach((p) => {
    product += `<div class="col-4 col-6-medium col-12-small product-item">
							<article class="box style2">
								<div class="image featured">
									<img src="images/${p.img.src}.jpg" alt="${p.img.alt}" />
								</div>
								<h3>${p.name}</h3>
								<p class="price">${p.price} &euro;</p>
								<p class="collection"><span>${p.theme}</span></p>
								<button class="btn btn-secondary add-to-cart" onclick="cartCounter()" title="Quick Shop">
									<i class="fas fa-cart-arrow-down"></i>
								</button>
							</article>
						</div>`;
  });
  document.getElementById("products").innerHTML = product;
}

function sorting(products){
    var sortType = $("#sort").val();
    console.log(sortType);
    if(sortType == "az"){
    return products.sort((a,b) => a.name > b.name ? 1 : -1);
    }
    else if(sortType == "za"){
    return products.sort((a,b) => a.name < b.name ? 1 : -1);
    }
    else if(sortType == "priceup"){
    return products.sort((a,b) => a.price > b.price ? 1 : -1);
    }
    else if(sortType == "pricedown"){
    return products.sort((a,b) => a.price < b.price ? 1 : -1);
    }
  }
  
  let counter = 1;
  
  function cartCounter(){
    document.getElementById("lblCartCount").innerHTML = counter++;
    $("#lblCartCount").show();
  }