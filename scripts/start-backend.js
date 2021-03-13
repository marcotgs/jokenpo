const shell = require('shelljs');
const chalk = require('chalk');
const log = console.log;

log(`${chalk.green('Starting cluster...')}`);

shell.exec('minikube start');

log(`${chalk.green('Starting deploying charts...')}`);

const backendDir = './backend';

const backendServices = shell.ls(backendDir);
backendServices.forEach((backendService) => {
  if (backendService !== 'game') return;
  shell.exec(
    `docker-compose -f ${backendDir}/${backendService}/docker-compose.yml build`,
    { silent: true, fatal: true },
  );
  shell.exec(
    `kubectl apply -f ${backendDir}/${backendService}/charts`,
    {
      silent: true,
    },
    (_code, _stdout, stderr) => {
      if (stderr) log(chalk.red(`[${backendService}] ${stderr}`));
      else
        log(
          `${chalk.blue(`[${backendService}]`)} ${chalk.green(
            'charts applied!\n',
          )}`,
        );
    },
  );
});
