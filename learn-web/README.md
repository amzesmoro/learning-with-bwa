## storegg

### Install NextJS
```
npx create-next-app@latest <project_name> --typescript
```
or, if you like to use yarn, use this command:
```
yarn create next-app --typescript
```

### Install Storybook
```
npx sb init
```

### Eslint Setup
Use this command to Eslint setup: `eslint --init`

### Atomic Design by Prawito Hudoro
Based on structure of the project, we will create a new folder on root folder, namely `components`. On `components` folder, then we create some folder namely: `atoms, molecules, organisms`. 
- **atoms**. Ini adalah komponen yang paling kecil. Komponen ini dibuat kalau digunakan lebih dari 2 kali. 
- **molecules**. Ini adalah komponen yang sederhana, cukup simple dan digunakan berulang atau reuse. (POV: Didalam atoms dan molecules jarang di simpan state, walaupun boleh menyimpan state didalamnya).
- **organisms**. Merupakan section yang HTMLnya panjang, sehingga kita boleh membuatnya dalam sebuah group section/organisms. Digunakan untuk me-maintenance state didalamnya, calling API, atau memberikan logic didalamnya. Biasanya Organisms ini bersifat independent.

Generally, atomic design boleh dibuat dengan nama folder `basic component. complex component`.

Notes: Structure of the folder project, pure POV by Prawito Hudoro. 
To learn more about Atomic Design, goto: [Atomic Design by Prawito](https://www.youtube.com/results?search_query=atomic+design+prawito+hudoro)

