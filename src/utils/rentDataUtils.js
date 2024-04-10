import { colors } from "../styles/colors";

export const fetchRentalData = () => {
    return [
        { title: 'Monthly', price: '$600', bgColor: colors.bgColorOrange },
        { title: 'Maintenance / Month', price: '$20', bgColor: colors.bgColorOrange },
        { title: 'Home Insurance', price: '$300', bgColor: colors.bgColorOrange },
        { title: 'Deposit', price: '$300', bgColor: colors.bgColorBlue },
        { title: 'Holding Deposit', price: '$300', bgColor: colors.bgColorBlue },
        { title: 'Lease Breakage', title2: 'Refer Lease Agreement', bgColor: '#f2f2f2' },
    ];
  };