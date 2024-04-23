export interface ITravelCardProp {
    image: string;
    companyName: string;
    ratings: number;
    customerCount: string;
    operationCountry: { countryFlag: string; countryName: string;}[];
    vesselsNo: number;
    vesselsType: string;
    popularVessels: string;
    description: string;
}
