const product = require("../models/productModel");

function handleAdminHome(req,res){
  res.render("admin/home")
}



async function handleImageUpload(req, res) {

    // if (req.files === undefined) {
    //   return res.redirect("/admin")
    // }
    const id = "66c853b111a55ddf962156a2"
    const car = await product.findById({_id:id})

    // const files = req.files;
    

  //   files.forEach(file => {
  //     // car.carImage = file.buffer
  //     car.sliderImage.push({
  //     imageBuffer: file.buffer,
  //     imageName: file.originalname
  //   });
  //  });
  
  car.carParkedAt.building = "Astra Tower"
  car.carParkedAt.address = "Astra Tower, Shp no.127&128 first floor, Rajarhat main Rd, AA II, Newtown, Kolkata,WB"

   await car.save();
   res.redirect("/admin");
  
  }



module.exports = {
     handleImageUpload,handleAdminHome
  }