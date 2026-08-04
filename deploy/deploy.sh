#!/usr/bin/env sh
set -eu

ENVIRONMENT="${1:-}"

if [ -z "$ENVIRONMENT" ]; then
    echo "Uso: $0 <development|staging|production>"
    exit 1
fi

APP_NAME="hrz-energia-site"
BASE_DIR="/var/www/$ENVIRONMENT/${APP_NAME}"
export COMPOSE_PROJECT_NAME="${ENVIRONMENT}-${APP_NAME}"

case "$ENVIRONMENT" in
    development)
        COMPOSE_FILE="docker-compose.dev.yml"
        ;;
    staging)
        COMPOSE_FILE="docker-compose.staging.yml"
        ;;
    production)
        COMPOSE_FILE="docker-compose.prod.yml"
        ;;
    *)
        echo "Ambiente inválido: $ENVIRONMENT"
        exit 1
        ;;
esac

echo "================================="
echo "Deploy: $APP_NAME"
echo "Ambiente: $ENVIRONMENT"
echo "Compose: $COMPOSE_FILE"
echo "================================="

cd "$BASE_DIR"



echo "Parando containers antigos..."

docker compose \
    -p "$COMPOSE_PROJECT_NAME" \
    -f "$COMPOSE_FILE" \
    down


echo "Build das imagens..."

docker compose \
    -p "$COMPOSE_PROJECT_NAME" \
    -f "$COMPOSE_FILE" \
    build --pull


echo "Subindo aplicação..."

docker compose \
    -p "$COMPOSE_PROJECT_NAME" \
    -f "$COMPOSE_FILE" \
    up -d


echo "Limpando imagens antigas..."

docker image prune -f


echo "Deploy concluído!"