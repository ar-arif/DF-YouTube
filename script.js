let watchBTN = document.querySelector("#watch");
let yt = document.querySelector("#yt");
let ytLink = document.querySelector("#inputURL");

watchBTN.addEventListener("click", video);
ytLink.addEventListener("keyup", (event) =>
{
	if (event.key == "Enter" || event.code == "Enter")
	{
		video();
	}
});

function video()
{
	let url = ytLink.value;
	let id;
	if (is_url(url))
	{
		if (url.includes("m.youtube.com/watch?v"))
		{
			id = url.slice(30);
		}
    else if (url.includes("&list="))
    {
      temp = url.indexOf("&list=")
      id = "videoseries?" + url.slice(temp + 1);
    }
		else if (url.includes("www.youtube.com/watch?v"))
		{
			id = url.slice(32);
		}
		else if (url.includes("youtube.com/watch?v"))
		{
			id = url.slice(28);
		}
		else
		{
			id = url.slice(17);
		}
		console.log(id)
		yt.innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; 
	}
	else
	{
		let alert = document.querySelector("#alert");
		alert.classList.remove("d-none");
	}
}

function is_url(str)
{
	regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
	if (regexp.test(str))
	{
		return true;
	}
	else
	{
		return false;
	}
}
