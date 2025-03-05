# .NET Architectural Components

![Architectural Components](https://docs.microsoft.com/en-us/dotnet/standard/media/components.png)

# .NET Core 2.0

.NET Core 2.0 is available today as a final release. You can start developing with it at the command line, in your favorite text editor, in Visual Studio 2017 15.3, Visual Studio Code or Visual Studio for Mac. It is ready for production workloads, on your own hardware or your favorite cloud, like Microsoft Azure.

In previous versions of .NET Core, you had to run the `dotnet restore` command to download dependencies immediately after you created a new project with the `dotnet new` command, as well as whenever you added a new dependency to your project. In .NET Core 2.0, `dotnet restore` runs implicitly when the `dotnet new` command executes. It also runs implicitly if dependencies need to be updated when other commands, such as the `run`, `build`, and `publish` commands, execute.
You can also disable the automatic invocation of `dotnet restore` by passing the `--no-restore` switch to the `new`, `run`, `build`, `publish`, `pack`, and `test` commands.

.NET Core 2.0 supports C# 7.1, which adds a number of new features.

Use .NET Core for your server application when:
 * You have cross-platform needs.
 * You are targeting microservices.
 * You are using Docker containers.
 * You need high-performance and scalable systems.
 * You need side-by-side .NET versions per application.

# .NET Standard 2.0

The .NET Standard 2.0 specification is now complete. It is supported in .NET Core 2.0, in the .NET Framework 4.6.1 and later versions.

.NET Standard is for sharing code. .NET Standard is a set of APIs that all .NET implementations must provide to conform to the standard. This unifies the .NET implementations and prevents future fragmentation. It replaces Portable Class Libraries (PCLs) as the tool for building .NET libraries that work everywhere.

# ASP.NET Core 2.0

Razor Pages is a new feature of ASP.NET Core that makes coding page-focused scenarios easier and more productive.

ASP.NET Core provides the following benefits:
 * A unified story for building web UI and web APIs.
 * Integration of modern client-side frameworks and development workflows.
 * A cloud-ready, environment-based configuration system.
 * Built-in dependency injection.
 * A lightweight, high-performance, and modular HTTP request pipeline.
 * Ability to host on IIS or self-host in your own process.
 * Can run on .NET Core, which supports true side-by-side app versioning.
 * Tooling that simplifies modern web development.
 * Ability to build and run on Windows, macOS, and Linux.
 * Open-source and community-focused.

# Web Applications with ASP.NET Core Architecture and Patterns guidance

Clean Architecture Layers (Onion view)

![Clean Architecture Layers](https://msdnshared.blob.core.windows.net/media/2017/06/062217_2209_ThenewNETAp11.png)

ASP.NET Core Architecture

![ASP.NET Core Architecture](https://msdnshared.blob.core.windows.net/media/2017/06/062217_2209_ThenewNETAp12.png)

https://www.microsoft.com/net/learn/architecture

# Entity Framework Core 2.0

Entity Framework (EF) Core is the lightweight, extensible, and cross-platform version of Entity Framework, the popular Object/Relational Mapping (O/RM) framework for .NET.

You can start using EF Core 2.0 today by installing an EF Core 2.0-compatible database provider NuGet package in your applications. E.g. to install the SQL Server provider from the command line in a .NET Core 2.0 application: `dotnet add package Microsoft.EntityFrameworkCore.SqlServer -V 2.0.0`

# Getting started

In this tutorial, you create three projects: a library project, tests for that library project, and a console application that makes use of the library.

In the terminal, create a golden folder and open the folder. This folder is the root of your solution. Run the dotnet new command to create a new solution, golden.sln:

`dotnet new sln`

From the golden folder, execute the following command to create a library project, which produces two files,library.csproj and Class1.cs, in the library folder:

`dotnet new classlib -o library`

Execute the dotnet sln command to add the newly created library.csproj project to the solution:

`dotnet sln add library/library.csproj`

Our library methods serialize and deserialize objects in JSON format. To support JSON serialization and deserialization, add a reference to the Newtonsoft.Json NuGet package. The dotnet add command adds new items to a project. To add a reference to a NuGet package, use the dotnet add package command and specify the name of the package:

`dotnet add library package Newtonsoft.Json`

Build the library with:

`dotnet build`

From the golden folder, create a new test project:

`dotnet new xunit -o test-library`

Add the test project to the solution:

`dotnet sln add test-library/test-library.csproj`

Add a project reference the library you created in the previous section so that the compiler can find and use the library project. Use the:

`dotnet add test-library/test-library.csproj reference library/library.csproj`

Create a new console application from the golden folder:

`dotnet new console -o app`

Add the console app project to the solution:

`dotnet sln add app/app.csproj`

Create the dependency on the library by running the dotnet add reference command:

`dotnet add app/app.csproj reference library/library.csproj`

Execute the following dotnet run command to run the executable, where the -p option to dotnet run specifies the project for the main application:

`dotnet run -p app/app.csproj`