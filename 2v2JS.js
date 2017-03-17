window.onload = getData();
function getData(){$.ajax({
    url: "https://us.api.battle.net/wow/leaderboard/2v2?locale=en_US&apikey=3uy3yd3qrzrdh4gh5djrfd8s95h2sx78",
    crossDomain: true,
    type:'GET',
    dataType: 'json',
    data:{},
       success: function(data){
    console.log(data);
           //console.log(data.rows[0]);
for(var i=0; i<101; i++){
            
var name = data.rows[i].name;
var server = data.rows[i].realmName;
var realmSlug = data.rows[i].realmSlug;
        
var profile = 'https://us.battle.net/wow/en/character/'+realmSlug+'/'+name+'/simple';
$(placement).append("<li id= Rank"+i+"></li>");
    
           var pClass = getClassName(data.rows[i].classId, i);
            var spec = getSpecName(data.rows[i].specId);
           var rating = data.rows[i].rating;
           var placement = document.getElementById("Ladder");
            var linkProfile = document.getElementById("Rank"+i);
               $(linkProfile).html("<a href="+profile+">"+name+"</a>"+"-"+server+" "+spec+" "+pClass+" " +rating);
           }
          
}
});
                  }


function getClassName(id, i){
    var classColour=document.getElementById("Rank"+i);
    switch(id){
        case 0:
            classColour.style.color="Red";
            return "Death Knight";
                break;
        case 1: 
            classColour.style.color="Brown";
            return "Warrior";
                break;
        case 2: 
            classColour.style.color="Pink";
            return "Paladin";
                break;
        case 3: 
            classColour.style.color="Green";
            return "Hunter";
                break;
        case 4: 
            classColour.style.color="Yellow";
            return "Rogue";
                break;
        case 5: 
            //classColour.style.color="Yellow";
            return "Priest";
                break;
        case 6: 
            classColour.style.color="Red";
            return "Death Knight";
                break;
        case 7: 
            classColour.style.color="MediumBlue";
            return "Shaman";
                break;
        case 8: 
            classColour.style.color="Aqua";
            return "Mage";
                break;
        case 9: 
            classColour.style.color="Purple";
            return "Warlock";
                break;
        case 10: 
            classColour.style.color="Chartreuse";
            return "Monk";
                break;
        case 11: 
            classColour.style.color="Orange";
            return "Druid";
                break;
        case 12: 
            classColour.style.color="DarkOrchid";
            return "Demon Hunter";
                break;
        default: return "ERROR";
    }
    
}

function getSpecName(id){
    switch(id){
        case 62:
            return "Arcane";
            break;
        case 63:
            return "Fire";
            break;
        case 64:
            return "Frost";
            break;
         case 65:
            return "Holy";
            break;
        case 66:
            return "Protection";
            break;
        case 70:
            return "Retribution";
            break;
        case 71:
            return "Arms";
            break;
        case 72:
            return "Fury";
            break;
        case 73:
            return "Protection";
            break;
        case 102:
            return "Balance";
            break;
        case 103:
            return "Feral";
            break;
        case 104:
            return "Guardian";
            break;
        case 105:
            return "Restoration";
            break;
        case 250:
            return "Blood";
            break;
        case 252:
            return "Frost";
            break;
        case 0:
            return "Unholy";
            break;
        case 253:
            return "Beast Mastery";
            break;
        case 254:
            return "Marksmanship";
            break;
        case 255:
            return "Survival";
            break;
        case 256:
            return "Discipline";
            break;
        case 257:
            return "Holy";
            break;
        case 258:
            return "Shadow";
            break;
        case 259:
            return "Assassination";
            break;
        case 260:
            return "Combat";
            break;
        case 261:
            return "Subtlety";
            break;
        case 262:
            return "Elemental";
            break;
        case 263:
            return "Enhancement";
            break;
        case 264:
            return "Restoration";
            break;
        case 265:
            return "Affliction";
            break;
        case 266:
            return "Demonology";
            break;
        case 267:
            return "Destruction";
            break;
        case 268:
            return "Brewmaster";
            break;
        case 269:
            return "Windwalker";
            break;
        case 270:
            return "Mistweaver";
            break;
        case 577:
            return "Havoc";
            break;
        default: return "ERROR"+id;
        
        
            
    }
}