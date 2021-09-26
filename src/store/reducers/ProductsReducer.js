import { AccordionActions } from "@material-ui/core";
import { ListGroupItem } from "react-bootstrap";

const initState = {
    products: [{
        id: 1, name: "Men t-shirt", categories: "Men", image: "https://rukminim1.flixcart.com/image/714/857/kj7gwi80-0/t-shirt/x/a/d/m-mask-hood-black-rawhit-original-imafyu4dxgyt2bgz.jpeg?q=50", price: 200, discount: 5,
        discountPrice: 200 - 5 / 100 * 200, quantity: 1, desc: "RAWHIT Solid Men Hooded Neck Black T-Shirt"
    },
    {
        id: 2, name: "Men t-shirt", categories: "Men", image: "https://rukminim1.flixcart.com/image/714/857/kfa0b680-0/t-shirt/7/x/u/s-fas10553whtblk-fascista-original-imafvrwstjcnthj8.jpeg?q=50", price: 300, discount: 11,
        discountPrice: 300 - 11 / 100 * 300, quantity: 1, desc: "Fascista Color Block Men Round Neck White T-Shirt"
    },
    {
        id: 3, name: "Men t-shirt", categories: "Men", image: "https://rukminim1.flixcart.com/image/800/960/kj7gwi80-0/t-shirt/v/0/y/l-mask-hood-maroon-rawhit-original-imafyu4drherh7up.jpeg?q=50", price: 150, discount: 2,
        discountPrice: 150 - 2 / 100 * 150, quantity: 1, desc: "RAWHIT Solid Men Hooded Neck Maroon T-Shirt"
    },
    {
        id: 4, name: "Men t-shirt", categories: "men", image: "https://rukminim1.flixcart.com/image/309/371/k0bbb0w0/t-shirt/a/d/t/m-718838-010-nike-original-imafk4vfn4yhdd4h.jpeg?q=50", price: 100, discount: 18,
        discountPrice: 100 - 18 / 100 * 100, quantity: 1, desc: "Nike Solid Men Round Neck Black T-Shirt"
    },
    {
        id: 5, name: "Women t-shirt", categories: "Women", image: "https://rukminim1.flixcart.com/image/495/594/k4bms280/t-shirt/2/f/v/xl-ww-3part-hood-mustard-tap-in-original-imafn3hgtzjvenjf.jpeg?q=50", price: 50, discount: 2,
        discountPrice: 50 - 2 / 100 * 50, quantity: 1, desc: "Tap-in Color Block Women Hooded Neck Yellow, Black, White T-Shirt"
    },
    {
        id: 6, name: "Women Shoes", categories: "Women", image: "https://rukminim1.flixcart.com/image/495/594/k79dd3k0pkrrdj/shoe/g/b/z/7-1171-muksn-shozie-original-imafphkejtpdyjdg.jpeg?q=50", price: 400, discount: 2,
        discountPrice: 400 - 2 / 100 * 400, quantity: 1, desc: "Shozie Breathable, Walking, Running, Casual,Gym Shoes Walking Shoes For Women  (Pink)"
    },
    {
        id: 7, name: "Choco flakes", categories: "Food", image: "https://rukminim1.flixcart.com/image/352/352/kgjqefk0/cereal-flake/g/c/m/75-choco-flakes-tetrapack-kwality-original-imafwrgyjxmw5ztp.jpeg?q=70", price: 50, discount: 2,
        discountPrice: 50 - 2 / 100 * 50, quantity: 1, desc: "Kwality Choco Flakes  (75 g, Tetrapack)"
    },
    {
        id: 8, name: "Almonds", categories: "Food", image: "https://rukminim1.flixcart.com/image/352/352/k4324y80/nut-dry-fruit/3/v/v/500-almond-pouch-prov-select-original-imafmtevghyznv7v.jpeg?q=70", price: 700, discount: 2,
        discountPrice: 70 - 2 / 100 * 70, quantity: 1, desc: "proV Select Almond Almonds  (500 g)"
    },
    {
        id: 9, name: "Cashews", categories: "Food", image: "https://rukminim1.flixcart.com/image/352/352/kapoo7k0/nut-dry-fruit/n/g/y/500-cashew-w400-pouch-kalbavi-original-imafs7y49snpeugy.jpeg?q=70", price: 90, discount: 2,
        discountPrice: 90 - 2 / 100 * 90, quantity: 1, desc: "Brand Kalbavi Quantity 500 g Type Cashews Variant Plain Container Type Pouch Model Name W400 Whole Combo No Maximum Shelf Life 6 Months Added Preservatives No Gift Pack No Nutrient Content NA"
    },
    {
        id: 10, name: "Oats", categories: "Food", image: "https://rukminim1.flixcart.com/image/416/416/k0463rk0/cereal-flake/d/p/v/1-5-oats-pouch-kellogg-s-original-imafjz4rfsyctrhh.jpeg?q=70", price: 250, discount: 10,
        discountPrice: 250 - 10 / 100 * 250, quantity: 1, desc: "Kellogg's Oats Trusted by Nutritionists  (1.5 kg, Pouch)"
    },
    {
        id: 11, name: "Peanut Butter", categories: "Food", image: "https://rukminim1.flixcart.com/image/352/352/k69ncsw0/jam-spread/g/w/m/1-all-natural-honey-peanut-butter-crunchy-plastic-bottle-nut-original-imafzrpazfjdu8ce.jpeg?q=70", price: 450, discount: 15,
        discountPrice: 450 - 15 / 100 * 450, quantity: 1, desc: "Pintola All Natural Honey Peanut Butter (Crunchy) 1 kg"
    },
    {
        id: 12, name: "Cadbury", categories: "Food", image: "https://rukminim1.flixcart.com/image/352/352/k9stjm80/jam-spread/f/v/q/200-dairy-milk-spready-plastic-bottle-chocolate-spread-cadbury-original-imafrgdca9hnrfdh.jpeg?q=70", price: 30, discount: 2,
        discountPrice: 30 - 2 / 100 * 30, quantity: 1, desc: "Cadbury Dairy Milk Spready 200 g "
    },
    {
        id: 13, name: "tshirt", categories: "Women", image: "https://rukminim1.flixcart.com/image/438/526/kf1fo280/sweatshirt/g/g/e/m-pikachu-hoodie-sweatshirt-for-women-and-girls-nakash-original-imafvkpp4hq22tyz.jpeg?q=70", price: 400, discount: 2,
        discountPrice: 400 - 2 / 100 * 400, quantity: 1, desc: "Nakash Full Sleeve Graphic Print Women Reversible Sweatshirt"
    },
    {
        id: 14, name: "women shoes", categories: "Women", image: "https://rukminim1.flixcart.com/image/714/857/k7dnonk0/shoe/j/j/4/507-4-nicholas-pink-original-imafpnf2gkmv5fkn.jpeg?q=50", price: 900, discount: 10,
        discountPrice: 900 - 10 / 100 * 900, quantity: 1, desc: "Nicholas 507 Walking Shoes For Women  (Pink, Black)"
    },
    {
        id: 15, name: "Men Shoes", categories: "Men", image: "https://rukminim1.flixcart.com/image/714/857/kfyasnk0-0/shoe/b/n/y/bq6166-011-nike-pure-platinum-summit-white-thunder-grey-original-imafwavfzu3ujp5z.jpeg?q=50", price: 400, discount: 2,
        discountPrice: 400 - 2 / 100 * 400, quantity: 1, desc: "Nike React Element 55 Basketball Shoes For Men  (White)"
    },
    {
        id: 16, name: "Men shoes", categories: "Men", image: "https://rukminim1.flixcart.com/image/714/857/kfyasnk0-0/shoe/a/w/d/bv9977-100nike-nike-white-white-wolf-grey-pure-platinum-original-imafwavfc9zzmfw8.jpeg?q=50", price: 6000, discount: 2,
        discountPrice: 6000 - 2 / 100 * 6000, quantity: 1, desc: "Nike Air Max 2090 Running Shoes For Men  (White)"
    },
    {
        id: 17, name: "Men Trousers", categories: "Men", image: "https://rukminim1.flixcart.com/image/800/960/jt4olu80/trouser/e/t/5/36-jogger-green-plus91-original-imafek22njetaexx.jpeg?q=50", price: 800, discount: 4,
        discountPrice: 800 - 4 / 100 * 800, quantity: 1, desc: "Plus91 Slim Fit Men Green Cotton Blend Trousers"
    },
    {
        id: 18, name: "Men joggers", categories: "Men", image: "https://rukminim1.flixcart.com/image/800/960/k66sh3k0/track-pant/p/y/2/30-jogger-lower-gym-running-fitnick-original-imafzphyjtwe6fbg.jpeg?q=50", price: 700, discount: 9,
        discountPrice: 700 - 9 / 100 * 700, quantity: 1, desc: "Plus91 Slim Fit Men Green Cotton Blend Trousers"
    },
    {
        id: 19, name: "Workout Shoes", categories: "Men", image: "https://rukminim1.flixcart.com/image/714/857/kjabs7k0-0/shoe/h/e/4/cq9382-001nike-11-nike-black-white-cool-grey-wolf-grey-original-imafyw3sqezgp8nz.jpeg?q=50", price: 4000, discount: 2,
        discountPrice: 4000 - 2 / 100 * 400, quantity: 1, desc: "Nike Nike Air Max Impact 2 Basketball Shoe Basketball Shoes For Men  (Black)"
    },
    {
        id: 20, name: "Women shoes", categories: "Women", image: "https://rukminim1.flixcart.com/image/714/857/k4yhtow0/shoe/g/z/z/507-blu-518-pk-9-fabbmate-multicolor-original-imafnnq9mrhkftj9.jpeg?q=50", price: 1500, discount: 22,
        discountPrice: 1500 - 22 / 100 * 1500, quantity: 1, desc: "Fabbmate Latest Collection, Comfortable & Fashionable Bellies for Women's and Girl's Pack of 2 Bellies For Women  (Multicolor)"
    }

    ],
    product: {}
}

const ProductsReducer = (state = initState, action) => {
         
    var state2=initState
        if(action.type==="PRODUCT"){
            return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
        } 
         
        if(action.type==="low"){
            var a = state.products.sort((a, b) => a.discountPrice - b.discountPrice)
            return { ...state, products: a }
         }
       if(action.type==="high"){
            var b = state2.products.sort((a, b) => {
                if (a.discountPrice > b.discountPrice) {
                    return -1;
                }
                if (a.discountPrice < b.discountPrice) {
                    return +1;
                }
                return 0;

            })
            return {
                ...state, products: b
            }
        }
         if(action.type==="Mens"){
            function check(value) {
                return value.categories === "Men"
            }
            var c = state2.products.filter(check)

            return {
                ...state, products: c
            }
        }
         if(action.type=== "Womens"){
            function check1(value) {
                return value.categories === "Women"
            }
            var c = state2.products.filter(check1)

            return {
                ...state, products: c
            }
        }
          if(action.type==="search_empty"){
             return state2
         }
         if(action.type==="Food"){
            function check4(value) {
                return value.categories === "Food"
            }
            var d = state2.products.filter(check4)

            return {
                ...state, products: d
            }
        }
         if(action.type==="search"){
            
            function filter1(value){
                return value.name.toLowerCase().includes(action.payload)||value.categories.toLowerCase().includes(action.payload)||value.desc.toLowerCase().includes(action.payload)
            }
            var e=state2.products.filter(filter1)
            return {
                ...state,products:e
            }
        }
        
else{return state;}
        
    }
    

export default ProductsReducer;