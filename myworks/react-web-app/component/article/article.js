import React,{ Component } from 'react'
import './article.css'

class Article extends Component{
	render(){
		return (
		<React.Fragment>
		  <div id="wrapper">
	<header>
		<section id="title">
			<h1>Pokémon'GO</h1>
			<h3>Wild Pocket Monster Hunting Game</h3>
		</section>
		<nav className="menu">
			<ul>
				<li className="li1"><a href="">Pikachu</a>
				</li><li className="li2">
					<a href="">Bulbasaur</a>
					<ul>
						<li><a href="">Lvysaur</a></li>
						<li><a href="">Venusaur</a></li>
						<li><a href="">Mega Venusaur</a></li>
					</ul>
				</li><li className="li3">
					<a href="">Charmander</a>
					<ul>
						<li><a href="">Charmeleon</a></li>
						<li><a href="">Charizard</a></li>
						<li><a href="">Mega Charizard X</a></li>
						<li><a href="">Mega Charizard Y</a></li>
					</ul>
				</li><li className="li4">
				<a href="">Squirtle</a>
			</li><li className="li5"><a href="">Snorlax</a></li>
			</ul>
		</nav>
	</header>
	<main className="clearfix">
		<article id="main-area">
			<div className="inner">
				<h3>from Wikipedia</h3>
				<h1>The Beginning Of Ash Ketchum's Adventure </h1>
				<p id="main-article">
					<img src={require("./img/xiaozhi.jpg")} alt="小智" />
					The series starts with Ash's tenth birthday, which according to Pokémon trainer
					registration bylaws allowed him to become a full-fledged Pokémon trainer and
					obtain a starter Pokémon. As a ten-year-old hailing from Pallet Town in the Kanto
					region, Ash was offered a choice between three Pokémon as his starter: Bulbasaur,
					Squirtle and Charmander. While he was planning to choose Squirtle, he received the
					electric type Pokémon Pikachu from Professor Oak instead, because he woke up late
					and all the other starter Pokémon had been taken by other trainers. After receiving
					Pikachu and a Pokédex, Ash left Pallet Town to start his journey. Since then Ash has
					traveled the world of Pokémon, competed in many challenges, and caught newer Pokémon.
					He has met many companions, such as Misty and Brock.
				</p>
			</div>
		</article>
		<aside className="clearfix">
			<form id="aside-form" action="#" method="post">
				<fieldset>
					<legend>Sign In for Code and Updates</legend>
					<section className="clearfix">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" name="email" />
					</section>
					<section className="clearfix">
						<label htmlFor="password">Password</label>
						<input type="text" id="password" name="password" />
					</section>
					<section id="submit-sec" className="clearfix">
						<input className="submit-btn" type="submit" value="Sign In" />
						<span>Not signed up?<a href="/article">Register now!</a></span>
					</section>
				</fieldset>
			</form>
			<nav id="article-nav">
				<h3>Recent Articles</h3>
				<ul>
					<li><a href="/article">Ho-Oh in the meta</a></li>
					<li><a href="/article">Lugia in the meta</a></li>
					<li><a href="/article">Celebi in the meta</a></li>
					<li><a href="/article">Jirachi in the meta</a></li>
					<li><a href="/article">Groudon in the meta</a></li>
					<li><a href="/article">Kyogre in the meta</a></li>
					<li><a href="/article">Rayquaza in the meta</a></li>
				</ul>
			</nav>
		</aside>
	</main>
	<section id="role-area" className="clearfix">
		<div className="role"><a href=""></a><span>卡奇 <br/> Kiawe</span></div>
		<div className="role"><a href=""></a><span>马玛内 <br/> Sophocles</span></div>
		<div className="role"><a href=""></a><span>玛奥 <br/> Mallow</span></div>
		<div className="role"><a href=""></a><span>小智 <br/> Ketchum</span></div>
		<div className="role"><a href=""></a><span>水莲 <br/> Lana</span></div>
		<div className="role"><a href=""></a><span>莉莉艾 <br/> Lillie</span></div>
	</section>
	<footer>
		<p>Pokémon and Pokémon character names are trademarks of Nintendo. During gameplay, please be aware of your surroundings and play safely.</p>
		<span><a href="">服务条款</a><a href="">隐私政策</a></span>
	</footer>
</div>
		</React.Fragment>
		)
	}
}

export default Article