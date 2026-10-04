export const contact = {
	email: 'mohammadmuzain8@gmail.com',
	phone: '+919880865468',
	phoneDisplay: '+91 98808 65468',
	whatsapp: '919880865468',
	address: '8PXG+723, Mudanidambur, Karnataka 576106',
	mapsUrl: 'https://maps.app.goo.gl/TVvCVwC2hUqpDE1r5',
};

/** Pre-filled enquiry so the first message already says what the visitor wants. */
const enquiryText = (product) =>
	product
		? `Hi Ashish Engineering Works, I'm interested in the ${product.title} (${product.sku}). Could you share the price and details?`
		: "Hi Ashish Engineering Works, I'd like to enquire about your kitchen equipment.";

export const telUrl = `tel:${contact.phone}`;

export const whatsappUrl = (product) =>
	`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(enquiryText(product))}`;

export const mailtoUrl = (product) => {
	const subject = product ? `Enquiry: ${product.title} (${product.sku})` : 'Enquiry – Ashish Engineering Works';
	return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiryText(product))}`;
};
