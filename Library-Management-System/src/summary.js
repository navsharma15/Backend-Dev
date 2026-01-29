function borrowingSummary(borrowRecord, lateFine) {
    let totalValue = borrowRecord.books.reduce(
        (sum, book) => sum + book.price,
        0
    );

    let discount = 0;

    if (borrowRecord.member.membershipType === "normal") {
        discount = 0.05;
    } else if (borrowRecord.member.membershipType === "gold") {
        discount = 0.15;
    }

    let discountedFine = lateFine - (lateFine * discount);

    return {
        memberName: borrowRecord.member.name,
        membershipType: borrowRecord.member.membershipType,
        totalBooks: borrowRecord.books.length,
        totalValue,
        lateFine,
        discountedFine
    };
}

export default borrowingSummary;
