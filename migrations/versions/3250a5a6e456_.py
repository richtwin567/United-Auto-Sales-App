"""empty message

Revision ID: 3250a5a6e456
Revises: 
Create Date: 2021-04-17 16:55:27.848913

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3250a5a6e456'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cars', sa.Column('years', sa.Integer(), nullable=True))
    op.drop_column('cars', 'year')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cars', sa.Column('year', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    op.drop_column('cars', 'years')
    # ### end Alembic commands ###
