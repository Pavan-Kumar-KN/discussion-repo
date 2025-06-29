// basic example
function doOperation(a, b, callback) {
    return callback(a, b);
}
function add(a, b) {
    return a + b;
}

console.log(doOperation(2,3,add));

// With setTimeout 
console.log("start")
setTimeout(()=>console.log("Delayed"),5000)
console.log("End")

// Custom Async Callback
function serverRequest(query, callback){
    setTimeout(()=> {
        callback(query + "Complete");
    },30000)
}
serverRequest("Fetch Data:", result =>{
    console.log(result)
})

//  Callback Hell Task for You:

// Level 1: Load User
function loadUser(callback) {
  console.log('🔄 Loading user...');
  setTimeout(() => {
    const user = { id: 123, name: 'Bob' };
    console.log('✅ User loaded:', user);
    callback(user);
  }, 1000);
}

// Level 2: Load Settings for the user
function loadSettings(user, callback) {
  console.log(`🔄 Loading settings for user ${user.name}...`);
  setTimeout(() => {
    const settings = { notifications: true, language: 'en' };
    console.log('✅ Settings loaded:', settings);
    callback(user, settings);
  }, 1000);
}

// Level 3: Load Preferences based on settings
function loadPreferences(user, settings, callback) {
  console.log(`🔄 Loading preferences for language ${settings.language}...`);
  setTimeout(() => {
    const preferences = { themeId: 'dark-mode', fontSize: 'medium' };
    console.log('✅ Preferences loaded:', preferences);
    callback(user, settings, preferences);
  }, 1000);
}

// Level 4: Load Theme based on preferences
function loadTheme(user, settings, preferences, callback) {
  console.log(`🔄 Loading theme ${preferences.themeId}...`);
  setTimeout(() => {
    const theme = { id: preferences.themeId, colors: { bg: '#000', text: '#fff' } };
    console.log('✅ Theme loaded:', theme);
    callback(user, settings, preferences, theme);
  }, 1000);
}

// Kick things off
loadUser(user => {
  loadSettings(user, (user, settings) => {
    loadPreferences(user, settings, (user, settings, preferences) => {
      loadTheme(user, settings, preferences, (user, settings, preferences, theme) => {
        console.log('🎉 All done:');
        console.log({ user, settings, preferences, theme });
      });
    });
  });
});
