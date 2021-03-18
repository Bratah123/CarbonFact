function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let quotes = [
    "The world can emit more than 2.4 million pounds of CO2 per second, and European countries are among some of the highest emitters in the world.",
    "The EPA revealed that indirect emissions related to electricity use rose by 19 percent over the same 1990-2015 time period. Electricity used at home contributes to indirect emissions because fossil fuels are burned by power plants to produce the power.",
    "Air conditioners and heaters not only use electricity, cooling systems also include refrigerants that contain hydrochlorofluorocarbons that act as greenhouse gases and ozone depleting agents. Refrigeration has been a major source of these in the past, although recent advancements are reducing emissions.",
    "Refrigerators, clothes dryers, and computers are known energy guzzlers. Even when an appliance is turned off, it can still use power when plugged in. Unplugging devices can help reduce CO2 emissions, but Energy Star products are notable for consuming less power and therefore reducing one’s carbon footprint.",
    "Food production accounts for 83 percent of carbon dioxide equivalent emissions, or 8.1 metric tons each year, according to a study published in Environmental Science & Technology. Transporting food accounts for 11 percent of emissions. Businesses that produce food contribute to carbon dioxide, methane, and nitrous oxide emissions, including the methane released by animals such as sheep, cattle, and goats. By eating locally grown food, the equivalent of driving 1,000 miles can be saved in a year.",
    "Burning automotive fuel contributes to emissions, but the exact amount depends on the fuel type. A UK gallon of petrol contributes 10.4 kilograms of CO2 per unit, while a USA gallon of gasoline contributes 8.7 kilograms. In the U.S., a gallon of diesel fuel yields 9.95 kilograms, and a gallon of heating oil, 11.26 kilograms of CO2  per unit.",
    "By driving two miles, 0.88 kilograms of carbon dioxide is released into the air, but walking the same distance only releases 0.039 kilograms and riding a bicycle just 0.017 kilograms of carbon dioxide.",
    "Driving at the speed limit can improve fuel economy by 7 to 14 percent. Not only does driving faster contribute to higher amounts of burned fuel and emissions released. At a speed over 50 miles per hour, every five mile-per-hour increase in fuel is equal to a cost value of $0.15 to $0.30 extra for each gallon burned.",
    "According to the National Oceanic and Atmospheric Administration, humans emit about 40 billion metric tons of carbon dioxide, based on 2015 numbers. Emitting CO2 via eruptions and underground magma (through vents, soils, porous rocks, and water), volcanoes emit up to 0.15 billion metric tons of carbon dioxide annually, or around 90 times less than people do.",
    "Lighting, heating, and cooling buildings contribute to emissions, as do the electrical appliances and equipment used by building occupants. Consuming 70 percent of the nation’s electricity, structures account for more emissions than the industrial or transportation sectors, according to the U.S. Green Building Council.",
    "Businesses that produce goods from raw materials burn fossil fuels directly from the energy they use. The chemical reactions that occur during production contribute to greenhouse emissions as well. By comparison, commercial and residential activities accounted for 12 percent of emissions that year.",
    "The World Resources Institute created this tool along with the World Business Council for Sustainable Development. Standards created by the protocol offer companies help with identifying components of a value chain to reduce emissions (Corporate Value Chain Standard). These can also aid the development of low-carbon product lines for identifying climate-related risks during production or provide a competitive edge (Product Life Cycle Standard).",
    "Workers who keep refrigerator doors open, use more electricity and don’t recycle contribute more in terms of carbon dioxide emissions. Ways to be more efficient include making bicycle use more accessible and encouraging employees to work at home.",
    "Company vehicle fleets and air-travel can contribute to emissions and older, less efficient cars can increase an organization’s carbon footprint. Planning trips in advance, using public transportation, and using telephone and video conferencing communications instead of traveling from point A to point B can reduce it.",
    
]

let getQuote = quotes[getRandomInt(quotes.length)];

document.getElementById("quote").innerHTML = `"${getQuote}"`;