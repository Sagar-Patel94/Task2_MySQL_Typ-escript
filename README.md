## Requirements

	Appointment booking
	1. Create user list with active or inactive status.
	2. User can book an appointment if its not conflicting with any other entries of other users.
	3. User can book multiple appointments but per day 1 appointment only for same user
	4. During book an appointment inactive users entries will not considered. Ex. if user status is inactive after book appointment then other user can use that time for book an appointment.
	5. Response error messages should be clear. Ex. Time not available, User can book only 1 appointment per day. Inactive user can't book an appointment.
	6. User cant select past time as start time (it must be greater than current time. ex. 11:20:30 AM. So start time must be greater than 11:20) and end time must be less than 1 hour from start time.  

	only need two api 
	1. for get all user list (active/inactive both)
	2. create appointment, for check validation use middleware

### Bonus section
*	create project in es6/typescript it will be bonus point.

## Development Environment 

* 	[Express](https://expressjs.com/)

### Acceptance Criteria
* 	it should validate all above rule before create appointment.

### On Completion
* 	share postman collection with different different request with store response.
* 	db script with sample data.
* 	Create a Zip from the updated source code and send it to your point of contact for review
*	 _Please delete the node_modules directory before compressing_