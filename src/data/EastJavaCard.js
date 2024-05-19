import FoodBanyuwangi from "../data/FoodBanyuwangi";
import WallpaperBanyuwangi from "../data/WallpaperBanyuwangi";
import CultureBanyuwangi from "../data/CultureBanyuwangi";
import FoodMalang from "../data/FoodMalang";
import WallpaperMalang from "../data/WallpaperMalang";
import CultureMalang from "../data/CultureMalang";
import FoodSurabaya from "../data/FoodSurabaya";
import WallpaperSurabaya from "../data/WallpaperSurabaya";
import CultureSurabaya from "../data/CultureSurabaya";

const card = [
    {
        id: 1,
        title: "Surabaya",
        description: "Surabaya, located on the northeastern coast of Java Island in Indonesia, is the capital of East Java province. It is situated on the banks of the Brantas River and faces the Madura Strait, providing a strategic position for maritime trade. As Indonesia's second-largest city, Surabaya serves as a major port and commercial center, connecting the island to both domestic and international markets. Its geographic location has historically made it a critical hub for transportation, industry, and cultural exchange in the region.",
        image:"/image/Surabaya/Tugu-Pahlawan.jpg",
        food: FoodSurabaya,
        wallpaper: WallpaperSurabaya,
        culture: CultureSurabaya
    },
    {
        id: 2,
        title: "Malang",
        description: "Malang, located in East Java, Indonesia, is nestled in a highland area surrounded by mountains. Situated approximately 90 kilometers south of Surabaya, it benefits from a cooler climate due to its elevation. Malang is known for its scenic landscapes, including lush tea plantations, volcanoes, and waterfalls. The city's geographic location makes it a popular destination for tourists seeking natural beauty and a respite from the tropical heat of the lowlands. Additionally, Malang serves as an important educational and cultural center in the region.",
        image: "/image/Malang/Colorful-Village.jpg",
        food: FoodMalang,
        wallpaper: WallpaperMalang,
        culture: CultureMalang,

    },
    {
        id: 3,
        title: "Banyuwangi",
        description: "Banyuwangi, located at the easternmost tip of Java Island in Indonesia, is bordered by the Bali Strait to the east and the Indian Ocean to the south. This strategic geographic position makes it a gateway between Java and Bali, facilitating significant maritime and cultural exchange. Banyuwangi is known for its diverse landscapes, including mountains, beaches, and national parks, such as the famous Ijen Crater with its blue fire phenomenon. The city's location also contributes to its rich cultural heritage, blending Javanese, Balinese, and Madurese influences, making it a unique and vibrant destination.",
        image: "/image/Banyuwangi/Kawah Ijen.jpg",
        food: FoodBanyuwangi,
        wallpaper: WallpaperBanyuwangi,
        culture: CultureBanyuwangi
    }
    
];

export default card;