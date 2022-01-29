class Contact
{
    //public properties (getters and setters)
    get FullName()
    {
        return this.m_fullName;
    }
    set FullName(fullName)
    {
        this.m_fullName = fullName;
    }

    get contactNumber()
    {
        return this.m_contactNumber;
    }
    set contactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber;
    }

    get emailAddress()
    {
        return this.m_emailAddress;
    }
    set emailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }
    //constructor
    constructor(fullName = "",  contactNumber = "", emailAddress = "")
    {
        this.FullName = fullName;
        this.contactNumber = contactNumber;
        this.emailAddress = emailAddress;
    }

    //public utility methods

    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
        {
            return `${this.FullName}, ${this.ContactNumber},${this.EmailAddress}`;
        }
        console.error("One or more properties of the Contact object are missing or invalid");
        return null;
    }

    deserialize(data) //assume that data is in a comma-seperatated format (string arary of properties)
    {
        let propertyArray = data.split(",")
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }

    //public overrides
    toString()
    {
        return `Full Name: ${this.FullName}\n Contact Number: ${this.contactNumber}\n Email Address: ${this.emailAddress}`;
    }
}