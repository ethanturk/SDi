# SDi

Solution implements a separate Angular4 frontend with a .Net Core Web API2 (.Net Core 2.0) backend. 

 - Data Access is achieved using EFCore. Database migrations are enabled
   so you will need to run Update-Database inside of VS to get the DB
   set up and running on the standard LocalDB instance. 
   
 - Swagger was included to provide a rich experience for API access.


 - You may need to update the API url in the data.service.ts file to   
   point at the appropriate port. Using dotnet run should work OOTB.


 - There are certain corners that were cut due to time constraints, such
   as CORS issues with HTTP calls between frontend and backend. Unit   
   Testing was implemented using MSTest and Moq.