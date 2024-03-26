# Ikigai - a lifeline for the linguistically stranded

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original.svg"  title="TailwindCSS" alt="TailwindCSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://d33wubrfki0l68.cloudfront.net/6e818a6053f5a11d48f2070de259173df357290c/207d7/_assets/_images/spline_logo.png" title="Spline" alt="Spline" width="40" height="40"/>&nbsp;
  <img src="https://www.saashub.com/images/app/service_logos/45/946180f16230/large.png?1555616439" title="GSAP" alt="GSAP" width="40" height="40"/>&nbsp;
</div>

<br>

# this project is deployed on:

https://mt-fe-s1.onrender.com/
<br>
the demo account added for this project:<br>
email: nishan@ikigai.com<br>
password: demo

# Introduction to the project:

While the UK is a sought-after destination for new beginnings, many immigrants find themselves disconnected from their roots, including their native language and cultural heritage. Our mission is to change this narrative. Through our app, users can practice their mother tongue through lifelike conversations with AI. We bridge the gap between native English speakers from migrant families and their deep roots abroad, offering a platform to reconnect with their heritage using a seamless voice interface and natural language processing technology.
<br>
the backend for this project is on this repo: **https://github.com/kazsho/mt-be-s1**

# problem statement:

Many of our parents have moved from all around the world to the UK to start a new life, raised their children here, but teaching of their native language didn’t happen in the home. So the children grow up being great English speakers, however they have difficulties connecting with the older generation who may not speak English well, as well as longing to converse with their peers from the same community in their mother tongue. The issue for some is total lack of understanding but for others they have partial understanding of the language but not enough to speak it confidently.<br>

This is something close to the heart and a real problem we wanted to provide a solution for, as it has affected a couple of us personally within this group.

# proposed solution:

An AI powered App that helps the user to use conversation based or tutor like AI to help them converse and practice the language.

# challenges and solutions:

**Reducing latency on the requests** due to 3 api calls being made. We began looking into how we would implement websockets into the application, made some progress and soon realised that with the time we had. We bit off more than we could chew as it’d require more time than we could allocate to it in this fast moving project.<br>
**Testing of the Openai calls**. Automated testing didn’t work as planned so we manually tested to ensure we got the desired functionality.<br>
**Too much information given to the user in the response**. We spent countless hours refining the prompt and learning to make them more efficient to not confuse the ai.<br>
**GPT-4 is quite expensive**. We learnt to use 3.5 turbo where possible and keep the prompts as small as possible. We had to be mindful of the size of the conversation as the cost per subsequent prompt can increase the cost of the project quickly. We did notice text-to-speech is quite cheap, though.<br>
**Requests were not working** for us as a couple days out from the presentation. We reviewed this as a team and noticed we had the wrong response output. We were thinking we had reached the api call limit or were ip blocked.<br>
**Pull requests from the team**. We found that end-of-day pull requests were as must to ensure the following morning in our standups we knew what was next on our list.<br>

# How to contribute to this project:

**Multiple languages** for the user to speak (Less common ones) that aren’t on popular platforms<br>
**Video guide:** Body language guide for how the user may respond / present themselves<br>
**Models for assessing user progress**<br>
**Typing as another way of communication**, this could be useful for those who may have speech issues but still want to learn.<br>
**Training the Ai further** to take on more personas e.g talking to your grandma etc<br>

# installs:

you will need to install the following dependencies to achieve that use `npm install` or `npm install $$` change the `$$` with one of the following:

    `@react-three/fiber`
    `@types/three`
    `next`
    `axios`
    `react`
    `react-dom`
    `react-router-dom`
    `react-scroll`
    `three`
    `three-stdlib`

you will need to install the following dependencies to achieve that use `npm install` or `npm install -D $$` change the `$$` with one of the following:

    `eact`
    `react-dom`
    `postcss`
    `tailwindcss`
    `vite`

# setting up:

Create a .env file that includes: `VITE_BACKEND_URL`-use the Deployed backend or add your own backend localhost link
<br>

# Updated on:

26/03/2024
