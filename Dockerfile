FROM node:alpine
COPY application/ /application
WORKDIR application/
EXPOSE 3000
CMD ["npm", "install"]
ENTRYPOINT ["node", "app.js"]