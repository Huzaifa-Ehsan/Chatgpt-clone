
## Project

## ChtaGPT-clone

The GPT-3 (Generative Pre-trained Transformer 3) language model is one of the most powerful natural language processing models available today, and the Text-Davinci-003 model is one of the largest and most capable variants of GPT-3. Developed by OpenAI.


 This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

## First, install all dependencies

yarn install 
# or 
npm install 

Then, run the development server:
```bash 
npm run dev 
# or yarn dev 
# or pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 


## Make .env.local file in your project

## API Refrence: 
You can generate your on api key [OPENAI_API_KEY(.env.local)] from https://platform.openai.com/

Create your own firebae project:
Go to Authentication, then in Sign-in method Provide your email! 

![authentication](https://user-images.githubusercontent.com/113031136/235342028-18b73070-358e-4772-b936-d7de6a81000b.jpg) 


When you click on Web SDK configuration provides [GOOGLE_ID and GOOGLE_SECRET(.env.local)] for authentication with google 

![Google authenticate](https://user-images.githubusercontent.com/113031136/235342347-c816da33-ebac-4198-bdb2-7f7583ac0dc3.jpg) 

NEXTAUTH_URL=http://localhost:3000 (.env.local)

You can write anything NEXTAUTH_SECRET 

NEXTAUTH_SECRET=THISISNEXTAUTHSECRET(.env.local) 
## To Generate FIREBASE_SERVICE_ACOUNT_KEY 

Go to firebase > Project Overview > Project Setting Generate new private key automatically downloaded the file for you then copy this and go to https://www.textfixer.com/tools/remove-line-breaks.php and paste the code their they generate a code remove-line-breaks than copy this code and paste in your .env.local  FIREBASE_SERVICE_ACOUNT_KEY=your key 

![env file](https://user-images.githubusercontent.com/113031136/235343338-6ba46f3b-c969-4460-bfda-a1086e1b5c1b.jpg)


## Sign-in 
When you try sign-in show this required confirmation from google cloud.So, click on error details

![Need google auth](https://user-images.githubusercontent.com/113031136/235359372-ffe1f7d5-d12e-4c62-8b72-0a0296432b2e.jpg)

Copy this url:

![copy url](https://user-images.githubusercontent.com/113031136/235359462-de5f21fe-6de0-480f-949e-50c7496c8b27.jpg)

Go to google cloud than into your project than go to API & Services in which Credentials than go to OAuth 2.0 Client IDs

![google cloud](https://user-images.githubusercontent.com/113031136/235359045-ee190319-858f-485f-987a-eef9b2ec332d.jpg)

![url](https://user-images.githubusercontent.com/113031136/235359741-c82ffad1-f0d2-41b7-b063-d51f8338a787.jpg)

In Authorized JavaScript origins
## ADD URL
http://localhost:3000

In Authorized redirect URIs
## ADD URL
which you copied here:

![paste](https://user-images.githubusercontent.com/113031136/235359976-69ef26a8-35f2-4701-86e4-fd87f2e9fdb6.jpg)

## Preview Project 

![chatgpt](https://user-images.githubusercontent.com/113031136/235343569-d7efd6a8-5529-4e23-81d8-a52a9f54462c.jpg) 
![chatgpt 1](https://user-images.githubusercontent.com/113031136/235343579-c40d2c7e-327a-4abe-b22a-ec8e4f870ed4.jpg) 
![chatgpt 2](https://user-images.githubusercontent.com/113031136/235343586-ba86bba5-fe85-41b6-a150-c6c42cb452f6.jpg) 
![chatgpt 3](https://user-images.githubusercontent.com/113031136/235343592-0faeb34a-df57-485e-83e0-ff0b5fb1f83b.jpg)

## After some modifications

![updated](https://user-images.githubusercontent.com/113031136/235658310-38e380e0-0388-44de-a039-b3a598aaf166.jpg)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Live preview on Vercel

https://chatgpt-clone-murex.vercel.app/