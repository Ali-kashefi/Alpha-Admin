
export default function calculateWeeklySalesChange(invoices) {
    // Filter out only successful orders.
    const successfulOrders = invoices?.filter((invoice) => invoice.status === "موفق");

    // If there are no successful orders, return default values.
    if (!successfulOrders || successfulOrders.length === 0) {
        return {
            currentWeekSales: 0,
            previousWeekSales: 0,
            comparison: 0,
            change: 0,
        };
    }

    // Define time ranges.
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

    // Filter and sum up the sales for the current week (last 7 days).
    const currentWeekSales = successfulOrders.filter(invoice => {
        const invoiceDate = new Date(invoice.date);
        return invoiceDate >= oneWeekAgo && invoiceDate <= now;
    }).reduce((sum, invoice) => sum + invoice.totalAmount, 0);

    // Filter and sum up the sales for the previous week (7 days before last week).
    const previousWeekSales = successfulOrders.filter(invoice => {
        const invoiceDate = new Date(invoice.date);
        return invoiceDate >= twoWeeksAgo && invoiceDate < oneWeekAgo;
    }).reduce((sum, invoice) => sum + invoice.totalAmount, 0);

    // Calculate the percentage metrics.
    let comparisonPercentage = 0;
    let changePercentage = 0;

    if (previousWeekSales > 0) {
        comparisonPercentage = (currentWeekSales / previousWeekSales) * 100;
        changePercentage = ((currentWeekSales - previousWeekSales) / previousWeekSales) * 100;
    } else if (currentWeekSales > 0) {
        // If previous week's sales were zero but current week's are positive.
        comparisonPercentage = 100;
        changePercentage = 100; // 100% growth from zero.
    }

    // Return all calculated values.
    return {
        currentWeekSales: currentWeekSales,
        previousWeekSales: previousWeekSales,
        comparison: comparisonPercentage,
        change: changePercentage,
    };
}