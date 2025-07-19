export interface EventData {
	Company: Company;
	Employees: Employee[];
	Products: Product[];
	Testimonials: Testimonial[];
	Departments: Department[];
	RecentNews: NewsItem[];
	DataVersion: string;
	LastGenerated: string;
}

export interface Company {
	Name: string;
	Founded: string;
	Mission: string;
	Vision: string;
	Headquarters: string;
	[key: string]: any;
}

export interface Employee {
	EmployeeID: string;
	FirstName: string;
	LastName: string;
	EmailAddress: string;
	PhoneNumber: string;
	Title: string;
	Department: string;
	Biography: string;
	ImageUrl: string;
}

export interface Product {
	ProductID: string;
	Name: string;
	Category: string;
	Description: string;
	Features: string[];
	ImageUrl: string;
}

export interface Testimonial {
	TestimonialID: string;
	Customer: {
		Name: string;
		Title: string;
		Company: string;
		LogoUrl: string;
	};
	Content: string;
	Rating: number;
	DateSubmitted: string;
}

export interface Department {
	DepartmentID: string;
	Name: string;
	Description: string;
}

export interface NewsItem {
	Title: string;
	Date: string;
	Summary: string;
}
