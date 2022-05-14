function getSpecial(weekday: string): string {




switch (weekday) {
    case 'Monday' :
        return "Family Night, Kids eat free(under 12 or 12 passing)";
        break;
    case 'Tuesday' :
        return "Taco Tuesdays 50% All Tacos";
        break;
    case 'Wednesday' :
        return "Waffle Wednesday"
        break;
    case 'Thursday' :
        return "Traditional Thursdays";
        break;
    default:
        return "Enjoy your weekend with 30% ice cream"
        break;
}
}
console.log(getSpecial("Monday"));
console.log(getSpecial("Tuesday"));
console.log(getSpecial("Wednesday"));
console.log(getSpecial("Thursday"));
console.log(getSpecial("Saturday"));