var url = 'https://api.vimeworld.ru/guild/get?name=xL&token=D9B8CUsY1s1Qis3V9qZV9u4rPLRGn0W'
fetch(url)
   .then(response => response.json())
   .then(json => MAIN(json))
   
function MAIN(GUILD)
{
   var theme = 'day';


   document.getElementById('sort_by_player').onclick = sort_by_player;
   document.getElementById('sort_by_exp').onclick = sort_by_exp;
   document.getElementById('sort_by_coins').onclick = sort_by_coins;
   document.getElementById('sort_by_lvl').onclick = sort_by_lvl;

   document.getElementById('day_theme_btn').onclick = set_day_theme;
   document.getElementById('night_theme_btn').onclick = set_night_theme;
   
   document.getElementById('sort_by_player').click();

   ///////////////////////////////////////
   function sort_by_player()
   {
      if (theme == 'day')
      {
         document.getElementById('sort_by_player').style.backgroundColor = 'rgb(255, 111, 135)'
         document.getElementById('sort_by_exp').style.backgroundColor = '#fff';
         document.getElementById('sort_by_coins').style.backgroundColor = '#fff';
         document.getElementById('sort_by_lvl').style.backgroundColor = '#fff';
      }
      else
      {
         document.getElementById('sort_by_player').style.backgroundColor = 'rgb(255, 111, 135)'
         document.getElementById('sort_by_exp').style.backgroundColor = 'rgb(26, 26, 26)';
         document.getElementById('sort_by_coins').style.backgroundColor = 'rgb(26, 26, 26)';
         document.getElementById('sort_by_lvl').style.backgroundColor = 'rgb(26, 26, 26)';
      }
      
      del_previews();

      var officers_leader = []

      var new_GUILD = Object.assign({}, GUILD);
      new_GUILD['members'] = []
      for (let i = 0; i < GUILD['members'].length; i++)
      {
         if (GUILD['members'][i]['status'] == 'LEADER')
         {
            new_GUILD['members'].push(GUILD['members'][i]);
            officers_leader.push(GUILD['members'][i]['user']['username'])
            break;
         }
      }
      for (let i = 0; i < GUILD['members'].length; i++)
      {
         if (GUILD['members'][i]['status'] == 'OFFICER')
         {
            new_GUILD['members'].push(GUILD['members'][i]);
            officers_leader.push(GUILD['members'][i]['user']['username'])
         }
      }
      for (let i = 0; i < GUILD['members'].length; i++)
      {
         if(GUILD['members'][i]['user']['rank'] == 'BUILDER'   ||
            GUILD['members'][i]['user']['rank'] == 'SRBUILDER' ||
            GUILD['members'][i]['user']['rank'] == 'MAPLEAD'   ||
            GUILD['members'][i]['user']['rank'] == 'YOUTUBE'   ||
            GUILD['members'][i]['user']['rank'] == 'DEV'       ||
            GUILD['members'][i]['user']['rank'] == 'ORGANIZER' ||
            GUILD['members'][i]['user']['rank'] == 'MODER'     ||
            GUILD['members'][i]['user']['rank'] == 'WARDEN'    ||
            GUILD['members'][i]['user']['rank'] == 'CHIEF'     ||
            GUILD['members'][i]['user']['rank'] == 'ADMIN')
         {
            if (officers_leader.indexOf(GUILD['members'][i]['user']['username']) == -1)
            {
               new_GUILD['members'].push(GUILD['members'][i]);
            }
         }
      }
      for (let i = 0; i < GUILD['members'].length; i++)
      {
         if(GUILD['members'][i]['user']['rank'] == 'IMMORTAL')
         {
            if (officers_leader.indexOf(GUILD['members'][i]['user']['username']) == -1)
            {
               new_GUILD['members'].push(GUILD['members'][i]);
            }
         }
      }
      for (let i = 0; i < GUILD['members'].length; i++)
      {
         if(GUILD['members'][i]['user']['rank'] == 'HOLY')
         {
            if (officers_leader.indexOf(GUILD['members'][i]['user']['username']) == -1)
            {
               new_GUILD['members'].push(GUILD['members'][i]);
            }
         }
      }
      for (let i = 0; i < GUILD['members'].length; i++)
      {
         if(GUILD['members'][i]['user']['rank'] == 'PREMIUM')
         {
            if (officers_leader.indexOf(GUILD['members'][i]['user']['username']) == -1)
            {
               new_GUILD['members'].push(GUILD['members'][i]);
            }
         }
      }
      for (let i = 0; i < GUILD['members'].length; i++)
      {
         if(GUILD['members'][i]['user']['rank'] == 'VIP')
         {
            if (officers_leader.indexOf(GUILD['members'][i]['user']['username']) == -1)
            {
               new_GUILD['members'].push(GUILD['members'][i]);
            }
         }
      }
      for (let i = 0; i < GUILD['members'].length; i++)
      {
         if(GUILD['members'][i]['user']['rank'] == 'PLAYER')
         {
            if (officers_leader.indexOf(GUILD['members'][i]['user']['username']) == -1)
            {
               new_GUILD['members'].push(GUILD['members'][i]);
            }
         }
      }
      
      show_stats(new_GUILD);
   }
   function sort_by_exp()
   {
      if (theme == 'day')
      {
         document.getElementById('sort_by_player').style.backgroundColor = '#fff';
         document.getElementById('sort_by_exp').style.backgroundColor = 'rgb(255, 111, 135)';
         document.getElementById('sort_by_coins').style.backgroundColor = '#fff';
         document.getElementById('sort_by_lvl').style.backgroundColor = '#fff';
      }
      else
      {
         document.getElementById('sort_by_player').style.backgroundColor = 'rgb(26, 26, 26)';
         document.getElementById('sort_by_exp').style.backgroundColor = 'rgb(255, 111, 135)';
         document.getElementById('sort_by_coins').style.backgroundColor = 'rgb(26, 26, 26)';
         document.getElementById('sort_by_lvl').style.backgroundColor = 'rgb(26, 26, 26)';
      }

      del_previews();

      var new_GUILD = Object.assign({}, GUILD);

      for (let i = 0; i < new_GUILD['members'].length; i++)
      {
         var flag = true;
         for (let j = 0; j < new_GUILD['members'].length - (i + 1); j++)
         {
            if (new_GUILD['members'][j]['guildExp'] < new_GUILD['members'][j+1]['guildExp'])
            {
               flag = false;
               [new_GUILD['members'][j], new_GUILD['members'][j + 1]] =
                  [new_GUILD['members'][j + 1], new_GUILD['members'][j]];
            }
         }
         if (flag)
         {
            break;
         }
      }

      show_stats(new_GUILD);
   }
   function sort_by_coins()
   {
      if (theme == 'day')
      {
         document.getElementById('sort_by_player').style.backgroundColor = '#fff';
         document.getElementById('sort_by_exp').style.backgroundColor = '#fff';
         document.getElementById('sort_by_coins').style.backgroundColor = 'rgb(255, 111, 135)';
         document.getElementById('sort_by_lvl').style.backgroundColor = '#fff';
      }
      else
      {
         document.getElementById('sort_by_player').style.backgroundColor = 'rgb(26, 26, 26)';
         document.getElementById('sort_by_exp').style.backgroundColor = 'rgb(26, 26, 26)';
         document.getElementById('sort_by_coins').style.backgroundColor = 'rgb(255, 111, 135)';
         document.getElementById('sort_by_lvl').style.backgroundColor = 'rgb(26, 26, 26)';
      }

      del_previews();

      var new_GUILD = Object.assign({}, GUILD);

      for (let i = 0; i < new_GUILD['members'].length; i++)
      {
         var flag = true;
         for (let j = 0; j < new_GUILD['members'].length - (i + 1); j++)
         {
            if (new_GUILD['members'][j]['guildCoins'] < new_GUILD['members'][j+1]['guildCoins'])
            {
               flag = false;
               [new_GUILD['members'][j], new_GUILD['members'][j + 1]] =
                  [new_GUILD['members'][j + 1], new_GUILD['members'][j]];
            }
         }
         if (flag)
         {
            break;
         }
      }
      
      show_stats(new_GUILD);
   }
   function sort_by_lvl()
   {
      if (theme == 'day')
      {
         document.getElementById('sort_by_player').style.backgroundColor = '#fff';
         document.getElementById('sort_by_exp').style.backgroundColor = '#fff';
         document.getElementById('sort_by_coins').style.backgroundColor = '#fff';
         document.getElementById('sort_by_lvl').style.backgroundColor = 'rgb(255, 111, 135)';
      }
      else
      {
         document.getElementById('sort_by_player').style.backgroundColor = 'rgb(26, 26, 26)';
         document.getElementById('sort_by_exp').style.backgroundColor = 'rgb(26, 26, 26)';
         document.getElementById('sort_by_coins').style.backgroundColor = 'rgb(26, 26, 26)';
         document.getElementById('sort_by_lvl').style.backgroundColor = 'rgb(255, 111, 135)';
      }

      del_previews();

      var new_GUILD = Object.assign({}, GUILD);

      for (let i = 0; i < new_GUILD['members'].length; i++)
      {
         var flag = true;
         for (let j = 0; j < new_GUILD['members'].length - (i + 1); j++)
         {
            if (new_GUILD['members'][j]['user']['level'] < new_GUILD['members'][j+1]['user']['level'])
            {
               flag = false;
               [new_GUILD['members'][j], new_GUILD['members'][j + 1]] =
                  [new_GUILD['members'][j + 1], new_GUILD['members'][j]];
            }
         }
         if (flag)
         {
            break;
         }
      }
      
      show_stats(new_GUILD);
   }

   function show_stats(GUILD_sorted) { 
      const guild_div = document.querySelector('.guild_stats_grid');
      for (let i = 0; i < GUILD_sorted['members'].length; i++)
      {
         var player_rank = check_rank(GUILD_sorted['members'][i]['user']['rank'])
   
         const new_nick = document.createElement('div');
         new_nick.classList.add("js_added")
         new_nick.innerHTML = `<img src="http://skin.vimeworld.ru/helm/${GUILD_sorted['members'][i]['user']['username']}.png" alt=""><div class="${player_rank} player_text">${GUILD_sorted['members'][i]['user']['username']}</div>`;
   
         const new_exp = document.createElement('div');
         new_exp.classList.add("js_added")
         new_exp.innerHTML = `<div class="exp_text">${GUILD_sorted['members'][i]['guildExp']}</div>`
         
         const new_coins = document.createElement('div');
         new_coins.classList.add("js_added")
         new_coins.innerHTML = `<div class="coins_text">${GUILD_sorted['members'][i]['guildCoins']}</div>`
   
         const new_lvl = document.createElement('div');
         new_lvl.classList.add("js_added")
         new_lvl.innerHTML = `<div class="lvl_text">${GUILD_sorted['members'][i]['user']['level']}</div>`
         
         guild_div.append(new_nick);
         guild_div.append(new_exp);
         guild_div.append(new_coins);
         guild_div.append(new_lvl);
      }
   }

   function check_rank(rank)
   {
      if (rank == 'PLAYER')    return 'PLAYER';
      if (rank == 'VIP')       return 'VIP';
      if (rank == 'PREMIUM')   return 'PREMIUM';
      if (rank == 'HOLY')      return 'HOLY';
      if (rank == 'IMMORTAL')  return 'IMMORTAL';
      if (rank == 'BUILDER')   return 'BUILDER';
      if (rank == 'SRBUILDER') return 'SRBUILDER';
      if (rank == 'MAPLEAD')   return 'MAPLEAD';
      if (rank == 'YOUTUBE')   return 'YOUTUBE';
      if (rank == 'DEV')       return 'DEV';
      if (rank == 'ORGANIZER') return 'ORGANIZER';
      if (rank == 'MODER')     return 'MODER';
      if (rank == 'WARDEN')    return 'WARDEN';
      if (rank == 'CHIEF')     return 'CHIEF';
      if (rank == 'ADMIN')     return 'ADMIN';
   }

   function del_previews()
   {
      var for_del = document.querySelectorAll('.js_added');
      for (let i = 0; i < for_del.length; i++)
      {
         for_del[i].remove();
      }
   }
///////////////////////////////////////////

   function set_day_theme()
   {
      theme = 'day';

      document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(255,255,255)'

      let elems_h2 = document.getElementsByTagName('h2');
      for (let i = 0; i < elems_h2.length; i++)
      {
         elems_h2[i].style.color = 'rgb(40,40,40)';
      }

      let elems_h3 = document.getElementsByTagName('h3');
      for (let i = 0; i < elems_h3.length; i++)
      {
         elems_h3[i].style.color = 'rgb(40,40,40)';
      }

      let elems_text = document.getElementsByClassName('text');
      for (let i = 0; i < elems_text.length; i++)
      {
         elems_text[i].style.color = 'rgb(90,90,90)';
      }

      let elems_name_stat_section = document.getElementsByClassName('name_stat_section');
      for (let i = 0; i < elems_name_stat_section.length; i++)
      {
         elems_name_stat_section[i].style.color = 'rgb(40, 40, 40)';
      }

      let elems_PLAYER = document.getElementsByClassName('PLAYER');
      for (let i = 0; i < elems_PLAYER.length; i++)
      {
         elems_PLAYER[i].style.color = 'rgb(80,80,80)';
      }

      let elems_lvl_text = document.getElementsByClassName('lvl_text');
      for (let i = 0; i < elems_lvl_text.length; i++)
      {
         elems_lvl_text[i].style.color = 'rgb(80,80,80)';
      }

      let elems_sorting_btn = document.getElementsByClassName('sorting_btn');
      for (let i = 0; i < elems_sorting_btn.length; i++)
      {
         elems_sorting_btn[i].style.borderColor = 'rgb(80,80,80)';
         elems_sorting_btn[i].style.backgroundColor = 'rgb(255,255,255)';
      }
      
      sort_by_player();
   }
   function set_night_theme()
   {
      theme = 'night';

      document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(26,26,26)';

      let elems_h2 = document.getElementsByTagName('h2');
      for (let i = 0; i < elems_h2.length; i++)
      {
         elems_h2[i].style.color = 'rgb(189,189,189)';
      }

      let elems_h3 = document.getElementsByTagName('h3');
      for (let i = 0; i < elems_h3.length; i++)
      {
         elems_h3[i].style.color = 'rgb(189,189,189)';
      }

      let elems_text = document.getElementsByClassName('text');
      for (let i = 0; i < elems_text.length; i++)
      {
         elems_text[i].style.color = 'rgb(159,159,159)';
      }

      let elems_name_stat_section = document.getElementsByClassName('name_stat_section');
      for (let i = 0; i < elems_name_stat_section.length; i++)
      {
         elems_name_stat_section[i].style.color = 'rgb(189,189,189)';
      }

      let elems_PLAYER = document.getElementsByClassName('PLAYER');
      for (let i = 0; i < elems_PLAYER.length; i++)
      {
         elems_PLAYER[i].style.color = 'rgb(159,159,159)';
      }

      let elems_lvl_text = document.getElementsByClassName('lvl_text');
      for (let i = 0; i < elems_lvl_text.length; i++)
      {
         elems_lvl_text[i].style.color = 'rgb(159,159,159)';
      }

      let elems_sorting_btn = document.getElementsByClassName('sorting_btn');
      for (let i = 0; i < elems_sorting_btn.length; i++)
      {
         elems_sorting_btn[i].style.borderColor = 'rgb(159,159,159)';
         elems_sorting_btn[i].style.backgroundColor = 'rgb(26,26,26)';
      }

      sort_by_player();
   }
}
