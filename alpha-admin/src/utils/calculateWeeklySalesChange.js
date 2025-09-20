export default function calculateWeeklySalesChange(invoices) {
  // Filter out only successful orders to ensure accurate sales calculation.
    const successfulOrders = invoices?.filter((invoice) => invoice.status === "موفق");

    // If there are no successful orders, return 0 to prevent errors.
    if (!successfulOrders || successfulOrders.length === 0) {
        return 0;
    }

    // Define time ranges for the current week and the previous week.
    // 'now' is the end date, 'oneWeekAgo' is the start of the current week,
    // and 'twoWeeksAgo' is the start of the previous week.
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

    // Filter and sum up the sales for the last 7 days (current week).
    const lastWeekInvoices = successfulOrders.filter(invoice => {
        const invoiceDate = new Date(invoice.date);
        return invoiceDate >= oneWeekAgo && invoiceDate <= now;
    });
    const lastWeekSales = lastWeekInvoices.reduce((sum, invoice) => {
        return sum + invoice.totalAmount;
    }, 0);

    // Filter and sum up the sales for the 7 days before the last week (previous week).
    const previousWeekInvoices = successfulOrders.filter(invoice => {
        const invoiceDate = new Date(invoice.date);
        return invoiceDate >= twoWeeksAgo && invoiceDate < oneWeekAgo;
    });
    const previousWeekSales = previousWeekInvoices.reduce((sum, invoice) => {
        return sum + invoice.totalAmount;
    }, 0);

    // Handle the edge case where the previous week's sales were zero.
    // If current sales are positive, it's a 100% growth; otherwise, it's 0%.
    if (previousWeekSales === 0) {
        return lastWeekSales > 0 ? 100 : 0;
    }

    // Calculate the percentage change using the sales from both weeks.
    const percentageChange = ((lastWeekSales - previousWeekSales) / previousWeekSales) * 100;

    // Return the absolute value of the percentage change.
    return Math.abs(percentageChange);
}