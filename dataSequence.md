```mermaid
sequenceDiagram
  participant Database
  participant Cattle
  participant Drovers

  participant Main
  participant Journey
  participant utils

  Drovers-->>Main: hireDrovers returns drovers
    Drovers-->>Database: Pulls drovers data from database 
    Database-->>Drovers: provides database object that contains array of drovers
    Main->>Drovers: hireDrovers function used to generate a random selection of drovers
    Drovers->>Main: returns drovers
  
  Cattle-->>Main:  roundup require function
 
  Database-->>Cattle:  roundup require function
    
  Journey-->>Main:  journeyMaker require function
    
    
  utils-->>Journey:  exports randomize function
  ```