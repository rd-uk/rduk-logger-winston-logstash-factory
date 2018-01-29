# RDUK - Logstash transport factory for Winston

this module is a [Logstash TCP transport](https://www.npmjs.com/package/winston-logstash) factory for the [Winston](https://www.npmjs.com/package/winston) implementation of [RDUK logger](https://www.npmjs.com/package/@rduk/logger)

## Installation

```sh
npm i --save --save-exact @rduk/logger @rduk/logger-winston-provider @rduk/logger-winston-logstash-factory
```

## Configuration

```yaml
# config.yml (see @rduk/configuration for detail)
---
logger:
  default: winston
  providers:
    -
      name: winston
      type: '@rduk/logger-winston-provider'
      level: debug
      factories:
        logstash: '@rduk/logger-winston-logstash-factory'
      transports:
        logstash: # options passed to factory
          host: 'example.com'
          port: 11111
          node_name: myapp
```

That's it!

## License and copyright

See [LICENSE](LICENSE) file
