# Template for REACT NATIVE CLI projects

<div>
  <img src="./src/assets/readme/example.png"/>
</div>

##  TECHNOLOGIES

<ul>
  <li>
    <p>React Native CLI</p>
  </li>
  <li>
    <p>TypeScript</p>
  </li>
  <li>
    <p>Styled-Components</p>
  </li>
  <li>
    <p>react-native-responsive-fontsize</p>
  </li>
  <li>
    <p>Eslint</p>
  </li>
  <li>
    <p>Prettier</p>
  </li>
  <li>
    <p>Husky</p>
  </li>
  <li>
    <p>lint-staged</p>
  </li>
  <li>
    <p>commit-conventional / commitlint</p>
  </li>
  <li>
    <p>react-native-iphone-x-helper</p>
  </li>
</ul>

##  PROJECT PRE-SETTINGS

###  -> Theme Styled-Components

<div>
  <img src="./src/assets/readme/theme_example.png"/>
</div>
<ul>
  <li>
    <p> -> The index file will compose our theme variable added to ThemeProvider in the App root.</p>
  </li>
  <li>
    <p> -> The colors file is responsible for storing all the colors defined for the project.</p>
  </li>
  <li>
    <p> -> The metrics file is responsible for storing some metrics settings that are frequently used in the construction of the project, such as the height and width of the App and the StatusBar.</p>
  </li>
  <li>
    <p> -> Because fonts are something very personal to each project, I preferred not to add a default to the project, but if you want to add it, just create the fonts file and add it to the theme after configuring it with the desired font.</p>
  </li>
  <li>
    <p> -> In the example styles file, we have what the use of the theme in styled-components would look like, along with the responsive-fontsize.</p>
  </li>
</ul>

###  -> Pre-commit / lint-staged

<div>
  <img src="./src/assets/readme/pre-commit_example.png"/>
</div>
<ul>
  <li>
    <p> -> This configuration of commits serves to preserve the quality of the code, and of the commits sent to the repository.</p>
  </li>
  <li>
    <p> -> In the above case, a change would be committed that has an error found by eslint. Therefore, when trying to commit a change, the eslint command is triggered, checking all the code, if an error is found, it will warn and prevent the commit until it is fixed.</p>
  </li>
</ul>


###  -> Commit-msg

#### Fail commit

<div>
  <img src="./src/assets/readme/fail_commit_push.png"/>
</div>

<ul>
  <li>
    <p> -> In the above case we can see the commit-msg in action. Basically it standardizes project commits, thus avoiding random commits, without types like "fix: message", "feat: message". Thus improving the quality of project commits.</p>
  </li>
  <li>
    <p> -> If we look at the commit message, we will see "randon commit", that is, it doesn't have a pattern, something that identifies what that commit is based on, a fix or a feature.</p>
  </li>
  <li>
    <p> -> When we look at the error message, it tells us exactly what is missing for the commit approval, even giving the source for a better understanding of the patterns.</p>
  </li>
</ul>


#### Success commit

<div>
  <img src="./src/assets/readme/success_commit_push.png"/>
</div>

<ul>
  <li>
    <p> -> In the above case, we have the commit success. When using the correct patterns, typing the commits for semantic sense will allow the commit to be sent.</p>
  </li>
  <li>
    <p> -> We can see that before the commit is approved, it runs eslint looking for an error in the code, then it runs commitlint looking for errors in the commit message, and if everything is approved, it allows the commit to be performed, thus making the code more safe.</p>
  </li>
</ul>

