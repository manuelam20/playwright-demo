const common = `
  --require-module ts-node/register
  --require src/**/*.ts
  --format summary 
  --format progress-bar
  --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
  --publish-quiet
  `;

const getWorldParams = () => {
    const params = {
        foo: 'bar',
    };

    return `--world-parameters ${JSON.stringify({ params })}`;
};

module.exports = {
    default: `${common} ${getWorldParams()}`,
};
