# Krenoril Data System

Krenoril Data System is an in-memory, NoSQL data store that is meant for games that use a data-driven approach for development. It allows you to store almost arbitrary game data under specific schemas in JSON files, and it loads those files at runtime. Schemas and records are modifiable through a free desktop application called Krenoril Data Editor, built with React and Electron. This was built to make it easy for UE4 game developers to add in basic mod support to their games.

## Developer setup
As a developer creating a game with Krenoril, follow these steps:  
- Read and accept the [EULA](EULA.md)
- git clone https://github.com/amalik2/krenoril-data-system.git
- Extract `krenoril-data-editor.rar`
- Open [setup.html](documentation/developers/setup.html) from its directory on your computer, and follow the instructions there to set up the application
- Open [adminUsageInstructions.html](documentation/developers/adminUsageInstructions.html) from its directory on your computer, and follow the instructions there to learn how to use the application
- Whenever you run the Krenoril application, make sure to launch it with `admin.bat` (NOT with the `.exe`)

## Player setup
As a player who wants to add mods to a game that uses Krenoril Data System, follow these steps:
 - Read and accept the [EULA](EULA.md)
 - Download `krenoril-data-editor.rar` from https://github.com/amalik2/krenoril-data-system/raw/master/krenoril-data-editor.rar
   - OR git clone https://github.com/amalik2/krenoril-data-system.git
 - Extract `krenoril-data-editor.rar`
 - Open [userUsageInstructions.html](documentation/players/userUsageInstructions.html) from its directory on your computer, and follow the instructions there to learn how to set up and use the application
 - Copy the `schemas.json` file that the developers of the game have provided you into the `data/` folder inside of the application's install directory
 - Whenever you run the Krenoril application, make sure to launch it with the `.exe` file (NOT with `admin.bat`)

## Structure
There are three main components to the system:
 - Containers: The data that is created through Krenoril is stored in objects called containers. Each container is able to define records. There will always be a "Main" container that can not be modified by your game's players, and this container can only be modified when Krenoril is running in admin mode. This is where you should place most (or all) of the base game's records. Each container is represented as a JSON file.
 - Schemas: A schema is a collection of properties that records can implement. Properties can be integers, floats, strings, or tables (table properties can contain integer, float, or string columns)
 - Records: Records are instances of a schema, and they are what will actually be accessible when your game is running. Each record must provide a value for each property in its corresponding schema.

## UE4 Runtime
When you start up your game, Krenoril Data System scans the `Content/KrenorilStorage/Containers` directory for all active container files. After scanning, it loads each active file into memory, and then merges records defined by each container together. This means that if you define records with the same ID in different containers, properties in the later one will be given precedence (but this behaviour can be controlled for each property in a record through the `Important` flag).

One important thing to keep in mind is that Krenoril Data System is not written in a way that supports modification of records after they have been loaded. While your game is running, the records should be considered to be read only. Any modifications to records should be done with Krenoril Data Editor instead.

## Modding Support
Krenoril Data System makes it easy to add in mod support for your game, by allowing users to create their own container files that define custom records, or overwrite existing records. Keep in mind that you need to program your game in a way that properly uses loaded Krenoril records in order for modding to work.

### Examples
 - Moddable game settings: Suppose you want your users to be able to modify game settings such as movement speed or starting stats. You can create a schema that represents a `Setting`, with an integer or float property called `Value`. Then, you would create records that represent every setting that you want your game to support modding for. In your game's code, you would read the value for those settings through their corresponding records, instead of using hard coded values.
 - Moddable content: Suppose you want your users to be able to actually add in new content to your game, such as being able to add new armour into an RPG. You can do this by creating a schema for `Armour`, and then in your game, you would avoid hardcoding the list of armours that players can somehow obtain. If you ever wanted to get a list of all armours, you would use the Krenoril function that returns all records falling under the `Armour` schema (and filtering the returned list if needed)

## API
Functions for working with the data that is loaded exist for both C++ and Blueprint. Example usages can be found in the [admin usage instructions file](documentation/developers/adminUsageInstructions.html)

## Bulk Operations
Krenoril Data Editor also provides a mechanism for adding, modifying, or deleting records automatically without using the UI. Instead, you can create "Data Scripts", which are essentially just basic JavaScript files. They allow you to automate tedious tasks such as reading the contents of a file, and then creating records from the contents.

More details about data scripts can be [found here](documentation/dataScripts.html)  
Examples of complete JavaScript files that can be used for data scripts can be [found here](dataScripts/)  

## License
The license for the code in this repository and for the Krenoril Data Editor application can be found [here](LICENSE.md).

## EULA
By using the code in this repository, or by using the Krenoril Data Editor application, you MUST agree to the conditions in [this file](EULA.md). You must agree to these terms regardless of what you are using Krenoril Data System and/or Krenoril Data Editor for.

## Limits
As this is an in-memory database, it is not recommended for games that require massive ammounts of records to be defined externally. As a reference, for an RPG that I developed where almost all of the game's content was stored in this database, I used less than 3000 records in total, so most games shouldn't reach the limits of this database.

Rough benchmarks with an **i5-6500** CPU and a **7200 RPM** hard drive:
 - 2,400 records across 51 schemas
   - ~20 MB of RAM used
   - Less than a second to load all records
   - ~2.3 MB total file size across all containers
 - 10,000 records under a schema with ~20 properties **AND** 2,400 records across 51 schemas:
   - ~70 MB of RAM used
   - ~2 seconds to load all records
   - ~10 MB total file size across all containers
 - 30,000 records under a schema with ~20 properties **AND** 2,400 records across 51 schemas:
   - ~170 MB of RAM used
   - ~6 seconds to load all records
   - ~26 MB total file size across all containers
 - 100,000 records under a schema with ~20 properties **AND** 2,400 records across 51 schemas:
   - ~560 MB of RAM used
   - ~15 seconds to load all records
   - ~80 MB total file size across all containers

Please note that the actual benchmarks will depend on what specific schemas and records you have created. The above results are just examples from a game that I've worked on, and they may not be accurate for other games.  

There isn't technically an official limit on how many containers or schemas can be loaded at once.  

## Bug Reports
If you encounter any bugs with the editor or the UE4 plugin, create a Github issue and fill in any details that may be needed to reproduce the bug, such as your Operating System and UE4 version.

## Important Notes
 - Only the `Win64` platform is officially supported (feel free to try this on other platforms though)
