interface Validator {
	hideEmail(email: string): any;
	validateEmail(email: string): any;
}

declare const EmailSecure: Validator;

export = EmailSecure;
